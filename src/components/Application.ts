import {
  CardBasketData,
  IApplication,
  IBasketCounterComponent,
  IBasketModel,
  ICatalogModel,
  IGalleryComponent,
  IModal,
  IOrderModel,
  ModalComponentsMap,
  ModalState,
  ModelEvents,
  ProductEvent,
  UIEvents
} from '../types'
import {IEvents} from "./base/events";
import {cloneTemplate} from "../utils/utils";
import {settings} from "../utils/constants";

import * as templates from "./templates";

import {CardCatalogComponent} from "./view/CardCatalogComponent";
import {CardBasketComponent} from "./view/CardBasketComponent";

const renderCardBasket = (events: IEvents, data: CardBasketData) => {
  const container = cloneTemplate<HTMLLIElement>(templates.cardBasketTemplate);
  return new CardBasketComponent(events, container, settings.cardBasket).render(data);
}

export class Application implements IApplication {
  private readonly _events: IEvents;
  private _modalState: ModalState | null

  basketModel: IBasketModel;
  catalogModel: ICatalogModel;
  orderModel: IOrderModel;

  gallery: IGalleryComponent;
  basketCounter: IBasketCounterComponent;
  modal: IModal;
  modalComponents: ModalComponentsMap;

  constructor(events: IEvents) {
    this._events = events;
  }

  private renderModal(content: HTMLElement) {
    this.modal.render({content: content});
    this.modal.open();
  }

  init(): void {
    // Установка обработчиков событий
    this._events.on(ModelEvents.CatalogUpdated, this.updateCatalog.bind(this));
    this._events.on(ModelEvents.BasketUpdated, this.updateBasket.bind(this));
    this._events.on(UIEvents.ModalClose, this.closeModal.bind(this));
    this._events.on(UIEvents.BasketOpen, this.openBasket.bind(this));
    this._events.on<ProductEvent>(UIEvents.ProductSelect, this.selectProduct.bind(this));
    this._events.on<ProductEvent>(UIEvents.BasketAddProduct, this.addProductToBasket.bind(this));
    this._events.on<ProductEvent>(UIEvents.BasketRemoveProduct, this.removeProductFromBasket.bind(this));
    this._events.on(UIEvents.BasketCreateOrder, this.createOrder.bind(this));
    // Получение данных с сервера
    this.catalogModel.loadProducts();
  }

  updateBasketCounter() {
    this.basketCounter.render({count: this.basketModel.getTotal()});
  }

  updateCatalog() {
    const items = this.catalogModel.products.map(item => {
      const element = cloneTemplate<HTMLButtonElement>(templates.cardCatalogTemplate);
      const card = new CardCatalogComponent(this._events, element, settings.cardCatalog);
      return card.render(item);
    });
    this.gallery.render({items: items});
  }

  updateBasket() {
    this.updateBasketCounter();
    if (this._modalState === ModalState.basket) {
      // TODO: move code to function renderBasket
      const products = this.basketModel.getProducts();
      const totalPrice = this.basketModel.getTotalPrice();
      const items = products.map((product, index) => renderCardBasket(this._events, {...product, index: index + 1}))
      this.renderModal(this.modalComponents[ModalState.basket].render({items: items, price: totalPrice}));
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
      this.renderModal(this.modalComponents[ModalState.preview].render(product));
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
        address: 'Test',
        payment: 'card',
        error: '',
        valid: true
      }))
    }
  }

  closeModal() {
    this._modalState = null;
    this.modal.close()
  }
}
