import {
  BasketUpdateEvent,
  BuyerInfoUpdateEvent,
  CardBasketData,
  CatalogUpdateEvent,
  ContactsData,
  FormFieldChangeEvent,
  IApplication,
  IBasketModel,
  IBuyerInfo,
  ICatalogModel,
  IModal,
  IOrderModel,
  IPage,
  ModalComponentsMap,
  ModalState,
  ModelEvents,
  OrderData,
  PaymentType,
  ProductEvent,
  UIEvents
} from '../types'
import {IEvents} from "./base/events";
import {cloneTemplate} from "../utils/utils";
import {settings} from "../utils/constants";

import * as templates from "./templates";

import {CardCatalogComponent} from "./view/CardCatalogComponent";
import {CardBasketComponent} from "./view/CardBasketComponent";
import {IFormValidator} from "../utils/validator";

const renderCardBasket = (events: IEvents, data: CardBasketData) => {
  const container = cloneTemplate<HTMLLIElement>(templates.cardBasketTemplate);
  return new CardBasketComponent(events, container, {...settings.card, ...settings.cardBasket}).render(data);
}

export class Application implements IApplication {
  private readonly _events: IEvents;
  private _modalState: ModalState | null

  basketModel: IBasketModel;
  catalogModel: ICatalogModel;
  orderModel: IOrderModel;

  page: IPage;

  modal: IModal;
  modalComponents: ModalComponentsMap;

  orderValidator: IFormValidator<OrderData>;
  contactsValidator: IFormValidator<ContactsData>;

  constructor(events: IEvents) {
    this._events = events;
  }

  private renderModal(content: HTMLElement) {
    this.page.setLocked(true);
    this.modal.render({content: content});
    this.modal.open();
  }

  private onInputChange(evt: FormFieldChangeEvent<string | PaymentType>) {
    this.orderModel.changeBuyerField(evt.key as keyof IBuyerInfo, evt.value);
  }

  init(): void {
    // Установка обработчиков событий
    this._events.on<CatalogUpdateEvent>(ModelEvents.CatalogUpdated, this.updateCatalog.bind(this));
    this._events.on<BasketUpdateEvent>(ModelEvents.BasketUpdated, this.updateBasket.bind(this));
    this._events.on<BuyerInfoUpdateEvent>(ModelEvents.BuyerInfoUpdated, this.updateBuyerInfo.bind(this));
    this._events.on<ProductEvent>(UIEvents.ProductSelect, this.selectProduct.bind(this));
    this._events.on<ProductEvent>(UIEvents.BasketAddProduct, this.addProductToBasket.bind(this));
    this._events.on<ProductEvent>(UIEvents.BasketRemoveProduct, this.removeProductFromBasket.bind(this));
    this._events.on(UIEvents.BasketCreateOrder, this.createOrder.bind(this));
    this._events.on(UIEvents.BasketOpen, this.openBasket.bind(this));
    this._events.on(UIEvents.ModalClose, this.closeModal.bind(this));
    this._events.on<FormFieldChangeEvent<string | PaymentType>>(UIEvents.OrderFormChanged, this.onInputChange.bind(this));
    this._events.on<FormFieldChangeEvent<string>>(UIEvents.ContactsFormChanged, this.onInputChange.bind(this));
    this._events.on(UIEvents.OrderFormCompleted, this.orderFormCompleted.bind(this));
    this._events.on(UIEvents.ContactsFormCompleted, this.contactsFormCompleted.bind(this));
    this._events.on(UIEvents.SuccessOrder, this.closeModal.bind(this));

    // Получение данных с сервера
    this.catalogModel.loadProducts();
  }

  updateBasketCounter(count: number) {
    this.page.setCounter(count);
  }

  updateCatalog(evt: CatalogUpdateEvent) {
    const items = evt.products.map(item => {
      const element = cloneTemplate<HTMLButtonElement>(templates.cardCatalogTemplate);
      const card = new CardCatalogComponent(this._events, element, {...settings.card, ...settings.cardCatalog});
      return card.render(item);
    });
    this.page.setGallery(items);
  }

  updateBasket(evt: BasketUpdateEvent) {
    this.updateBasketCounter(evt.itemsCount);
    if (this._modalState === ModalState.basket) {
      const items = evt.products.map((product, index) => renderCardBasket(this._events, {...product, index: index + 1}))
      this.modalComponents[ModalState.basket].render({items: items, price: evt.totalPrice})
    }
  }

  updateBuyerInfo(evt: BuyerInfoUpdateEvent) {
    if (this._modalState === ModalState.order) {
      this.modalComponents[ModalState.order].render({
        ...evt.buyer,
        ...this.orderValidator.validate(evt.buyer)
      });
    }
    else if (this._modalState === ModalState.contacts) {
      this.modalComponents[ModalState.contacts].render({
        ...evt.buyer,
        ...this.contactsValidator.validate(evt.buyer)
      });
    }
  }

  openBasket(): void {
    this.orderModel.reset();
    const products = this.basketModel.getProducts();
    const totalPrice = this.basketModel.getTotalPrice();
    const items = products.map((product, index) => renderCardBasket(this._events, {...product, index: index + 1}))
    this._modalState = ModalState.basket;
    this.renderModal(this.modalComponents[ModalState.basket].render({items: items, price: totalPrice}));
  }

  selectProduct(evt: ProductEvent): void {
    const product = this.catalogModel.getProduct(evt.id);
    if (product) {
      this._modalState = ModalState.preview;
      this.renderModal(this.modalComponents[ModalState.preview].render({
        ...product,
        inBasket: this.basketModel.hasProduct(product.id)
      }));
    }
  }

  addProductToBasket(evt: ProductEvent): void {
    this.closeModal();
    const product = this.catalogModel.getProduct(evt.id);
    product && this.basketModel.addProduct(product);
  }

  removeProductFromBasket(evt: ProductEvent): void {
    this.basketModel.removeProduct(evt.id);
  }

  createOrder() {
    if (this._modalState === ModalState.basket) {
      this._modalState = ModalState.order;
      this.renderModal(this.modalComponents[ModalState.order].render({
        ...this.orderModel.buyer,
        ...this.orderValidator.validate(this.orderModel.buyer)
      }));
    }
  }

  private orderFormCompleted() {
    if (this._modalState === ModalState.order && this.orderValidator.validate(this.orderModel.buyer).valid) {
      this._modalState = ModalState.contacts;
      this.renderModal(this.modalComponents[ModalState.contacts].render({
        ...this.orderModel.buyer,
        ...this.contactsValidator.validate(this.orderModel.buyer)
      }));
    }
  }

  private contactsFormCompleted() {
    if (this._modalState === ModalState.contacts) {
      const productIds = this.basketModel.getProducts().map(p => p.id);
      const order = {
        ...this.orderModel.buyer,
        items: productIds,
        total: this.basketModel.getTotalPrice(),
      };
      this.orderModel.createOrder(order)
        .then((result) => {
          this.basketModel.clear();
          this.renderModal(this.modalComponents[ModalState.success].render({totalPrice: result.total}))
        })
        .catch((error) => {
          this.modalComponents[ModalState.contacts].render({
            ...this.orderModel.buyer,
            valid: false,
            error: error || 'Не удалось создать заказ'
          })
        })
    }
  }

  closeModal() {
    this._modalState = null;
    this.modal.close();
    this.page.setLocked(false);
  }
}
