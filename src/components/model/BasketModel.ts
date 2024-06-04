import {BasketUpdateEvent, IBasketModel, IProduct, ModelEvents, ProductIdType} from "../../types";
import {IEvents} from "../base/events";
import {Model} from "../base/model";

export class BasketModel extends Model implements IBasketModel {
  private _products: Map<ProductIdType, IProduct> = new Map();

  constructor(events: IEvents) {
    super(events);
  }

  private updateBasket() {
    this.changed<BasketUpdateEvent>(ModelEvents.BasketUpdated, {
      totalPrice: this.getTotalPrice(),
      itemsCount: this.getTotal(),
      products: this.getProducts()
    });
  }

  addProduct(product: IProduct): void {
    if (!this._products.has(product.id)) {
      this._products.set(product.id, product);
      this.updateBasket();
    }
  }

  removeProduct(id: ProductIdType): void {
    if (this._products.has(id)) {
      this._products.delete(id);
      this.updateBasket();
    }
  }

  getTotal() {
    return this._products.size;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this._products.forEach((value) => {
      totalPrice += value.price || 0
    });
    return totalPrice;
  }

  clear(): void {
    this._products.clear();
    this.updateBasket();
  }

  getProducts(){
    return Array.from(this._products.values());
  }
}
