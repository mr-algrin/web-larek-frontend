import {Api} from "./base/api";

import {IOrder, IOrderApi} from "../types";

export interface IOrderResult {
  id: string;
  total: number
}


export class OrderApi extends Api implements IOrderApi {
  createOrder(order: IOrder): Promise<IOrderResult | null> {
    return this.post('/order', order)
      .then((data: IOrderResult) => data)
      .catch((error) => Promise.reject(error));
  }
}
