import {Model} from "../base/model";
import {IEvents} from "../base/events";

import {IBuyerInfo, IOrderModel} from "../../types";

export class OrderModel extends Model implements IOrderModel {
  private _buyer: IBuyerInfo;

  constructor(events: IEvents) {
    super(events);
    this.reset()
  }

  get buyer() {
    return this._buyer;
  }

  changeBuyerInfo<K extends keyof IBuyerInfo>(key: K, value: IBuyerInfo[K]): void {
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
}
