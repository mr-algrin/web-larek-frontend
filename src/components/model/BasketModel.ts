import { IBasketModel, IProduct, ProductIdType} from "../../types";
import {IEvents} from "../base/events";
import {Model} from "../base/model";

export class BasketModel extends Model implements IBasketModel {
  private _products: Map<ProductIdType, IProduct> = new Map();

  constructor(events: IEvents) {
    super(events);
  }

  get products(): Map<ProductIdType, IProduct> {
    return this._products;
  };

  addProduct(product: IProduct): void {
    if (!this._products.has(product.id))
      this._products.set(product.id, product);
  }

  removeProduct(id: ProductIdType): void {
    if (this._products.has(id))
      this._products.delete(id);
  }

  getTotal() {
    return this._products.size;
  }

  clear(): void {
    this._products.clear();
  }
}
