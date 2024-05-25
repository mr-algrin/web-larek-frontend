import {CatalogEventsEnum, CatalogUpdateEvent, ICatalogModel, IProduct, ProductIdType} from '../../types'
import {IEvents} from "../base/events";
import {Model} from "../base/model";

export class CatalogModel extends Model implements ICatalogModel {
  protected _products: Array<IProduct> ;
  protected events: IEvents;

  constructor(events: IEvents) {
    super(events);
  }

  get products() {
    return this._products;
  }

  setProducts(items: Array<IProduct>): void {
    this._products = [...items];
    this.changed();
  }

  getProduct(id: ProductIdType): IProduct | null {
    let product = null;

    this._products.forEach(item => {
      if (item.id === id)
        product = item;
    })
    return product;
  }

  protected changed() {
    this.events.emit<CatalogUpdateEvent>(CatalogEventsEnum.CatalogUpdated, {products: this._products})
  }
}
