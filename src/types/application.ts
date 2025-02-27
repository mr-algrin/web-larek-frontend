import {IBasketModel, ICatalogModel, IOrderModel} from "./model";
import {IModal, IPage, ModalComponentsMap} from "./component";
import {BasketUpdateEvent, BuyerInfoUpdateEvent, CatalogUpdateEvent, ProductEvent} from "./events";
import {IFormValidator} from "../utils/validator";
import {ContactsData, OrderData} from "./view";

// Класс контроллера
export interface IApplication {
  // модели
  basketModel: IBasketModel
  catalogModel: ICatalogModel
  orderModel: IOrderModel

  // компонент страницы
  page: IPage;

  // модальные компоненты
  modal: IModal;
  modalComponents: ModalComponentsMap;

  // валидаторы
  orderValidator: IFormValidator<OrderData>;
  contactsValidator: IFormValidator<ContactsData>;

  init: () => void
  openBasket: () => void
  updateBasketCounter: (count: number) => void
  updateCatalog: (evt: CatalogUpdateEvent) => void
  updateBasket: (evt: BasketUpdateEvent) => void
  updateBuyerInfo: (evt: BuyerInfoUpdateEvent) => void
  selectProduct: (evt: ProductEvent) => void
  addProductToBasket: (evt: ProductEvent) => void
  removeProductFromBasket: (evt: ProductEvent) => void
  createOrder: () => void
  closeModal: () => void
}
