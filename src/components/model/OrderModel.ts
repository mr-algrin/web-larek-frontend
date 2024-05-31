import {Model} from "../base/model";
import {IEvents} from "../base/events";

import {IBuyerInfo, IOrder, IOrderApi, IOrderModel} from "../../types";

export class OrderModel extends Model implements IOrderModel {
  private _buyer: IBuyerInfo;
  private _orderApi: IOrderApi;

  constructor(events: IEvents, orderApi: IOrderApi) {
    super(events);
    this._orderApi = orderApi;
    this.reset();
  }

  get buyer() {
    return this._buyer;
  }

  changeBuyerField<K extends keyof IBuyerInfo>(key: K, value: IBuyerInfo[K]): void {
    this._buyer[key] = value;
  }

  reset(): void {
    this._buyer = {
      address: '',
      email: '',
      phone:'',
      payment: null
    }
  }

  createOrder(order: IOrder): Promise<boolean> {
    return this._orderApi.createOrder(order)
      .then((result) => Promise.resolve(Boolean(result)));
  }
}
