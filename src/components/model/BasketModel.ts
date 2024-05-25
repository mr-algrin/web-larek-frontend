import {BasketProductCount, IBasketModel, IProduct, ProductIdType} from "../../types";
import {IEvents} from "../base/events";
import {Model} from "../base/model";

export class BasketModel extends Model implements IBasketModel {
  private _products: Map<ProductIdType, BasketProductCount> = new Map();

  constructor(events: IEvents) {
    super(events);
  }

  get products(): Map<ProductIdType, BasketProductCount> {
    return this._products;
  };

  addProduct(product: IProduct): void {
    if (this._products.has(product.id)) {

    }
    else {
      this._products.set(product.id, {product: product, count: 1});
    }
  }

  removeProduct(id: ProductIdType): void {

  }

  clear(): void {
    this._products.clear();
  }
}
