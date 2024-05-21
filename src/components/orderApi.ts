import {IOrder, IOrderResult} from "../types";
import {Api} from "./base/api";

export interface IOrderApi {
  createOrder: (order: IOrder) => Promise<IOrderResult | null>
}


export class OrderApi extends Api implements IOrderApi {
  createOrder(order: IOrder): Promise<IOrderResult | null> {
    return this.post('/order', order)
      .then((data: IOrderResult) => data)
      .catch(() => null);
  }
}
