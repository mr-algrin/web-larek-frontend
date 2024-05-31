import {
  ProductEvent,
  IApplication,
  IBasketModel,
  ICatalogModel,
  IOrderModel,
  ModelEvents,
  UIEvents,
  ModalComponentsMap,
  IBasketCounterComponent,
  IGalleryComponent,
  IModal,
  ModalState
} from '../types'
import {IEvents} from "./base/events";
import {cloneTemplate} from "../utils/utils";
import {settings} from "../utils/constants";

import * as templates from "./templates";

import {CardCatalogComponent} from "./view/CardCatalogComponent";


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

  init(): void {
    // Установка обработчиков событий
    this._events.on(ModelEvents.CatalogUpdated, this.updateCatalog.bind(this));
    this._events.on(UIEvents.BasketOpen, this.openBasket.bind(this));
    this._events.on<ProductEvent>(UIEvents.BasketAddProduct, this.addProductToBasket.bind(this));
    this._events.on<ProductEvent>(UIEvents.BasketRemoveProduct, this.removeProductFromBasket.bind(this));
    this._events.on<ProductEvent>(UIEvents.ProductSelect, this.selectProduct.bind(this));

    // Получение данных с сервера
    this.catalogModel.loadProducts();
  }

  updateBasketCounter() {
    this.basketCounter.render({count: this.basketModel.getTotal()});
  }

  updateCatalog(): void {
    const items = this.catalogModel.products.map(item => {
      const element = cloneTemplate<HTMLButtonElement>(templates.cardCatalogTemplate);
      const card = new CardCatalogComponent(this._events, element, settings.cardCatalog);
      return card.render(item);
    });
    this.gallery.render({items: items});
  }

  // TODO: реализовать после одобрения архитектуры
  openBasket(): void {
    this.modal.render({
      content: this.modalComponents[ModalState.basket].render({items: [], price: 0})
    });
    this.modal.open();
  }

  // TODO: реализовать после одобрения архитектуры
  selectProduct(evt: ProductEvent): void {
    alert(`Select event: ${evt.id}`);
    // Получить элемент продукта из модели каталога
    // отрисовать модальное окно для выбранного продукта
  }

  // TODO: реализовать после одобрения архитектуры
  addProductToBasket(evt: ProductEvent): void {
    alert('addProductToBasket');
    // Закрыть модальное окно
    // Добавить продукт в модель корзины
    // Обновить счетчик корзины
  }

  // TODO: реализовать после одобрения архитектуры
  removeProductFromBasket(evt: ProductEvent): void {
    alert('removeProductFromBasket')
    // Удалить элемент из модели каталога
    // Перерисовать компонент корзины
    // Обновить счётчик корзины
  }
}
