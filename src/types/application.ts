import {IBasketModel, ICatalogModel, IOrderModel} from "./model";
import {IOrderApi, IProductApi} from "./api";

export enum ModalState {
  product,
  basket,
  contacts,
  order,
  success
}

export interface IApplication {
  basketModel: IBasketModel
  catalogModel: ICatalogModel
  orderModel: IOrderModel
  productApi: IProductApi
  orderApi: IOrderApi
  modalState: ModalState | null

  setModalState: (state: ModalState | null) => void
}
