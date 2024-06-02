import {IBasketModel, ICatalogModel, IOrderModel} from "./model";
import {IBasketCounterComponent, IGalleryComponent, IModal, ModalComponentsMap} from "./component";
import {ProductEvent} from "./events";

// Класс контроллера
export interface IApplication {
  // модели
  basketModel: IBasketModel
  catalogModel: ICatalogModel
  orderModel: IOrderModel

  // контейнерные компоненты
  gallery: IGalleryComponent;
  basketCounter: IBasketCounterComponent;

  // модальные компоненты
  modal: IModal;
  modalComponents: ModalComponentsMap;

  init: () => void
  updateBasketCounter: () => void
  updateCatalog: () => void
  updateBasket: () => void
  openBasket: () => void
  selectProduct: (evt: ProductEvent) => void
  addProductToBasket: (evt: ProductEvent) => void
  removeProductFromBasket: (evt: ProductEvent) => void
  createOrder: () => void
  closeModal: () => void
}
