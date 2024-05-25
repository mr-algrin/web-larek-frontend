import {IApplication, IBasketModel, ICatalogModel, IOrderApi, IOrderModel, IProductApi, ModalState} from '../types'

export class Application implements IApplication {
  private _modalState: ModalState | null

  basketModel: IBasketModel;
  catalogModel: ICatalogModel;
  orderModel: IOrderModel;
  orderApi: IOrderApi;
  productApi: IProductApi;

  get modalState() {
    return this._modalState;
  }

  setModalState(state: ModalState | null) {
    this._modalState = state;
  }
}
