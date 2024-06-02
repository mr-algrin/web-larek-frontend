import {IBasketModel, ICatalogModel, IOrderModel} from "./model";
import {IBasketCounterComponent, IGalleryComponent, IModal, ModalComponentsMap} from "./component";
import {BasketUpdateEvent, BuyerInfoUpdateEvent, CatalogUpdateEvent, ProductEvent} from "./events";

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
