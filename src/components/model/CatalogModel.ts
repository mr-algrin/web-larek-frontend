import {ModelEvents, ICatalogModel, IProduct, IProductApi, ProductIdType, CatalogUpdateEvent} from '../../types'
import {IEvents} from "../base/events";
import {Model} from "../base/model";

export class CatalogModel extends Model implements ICatalogModel {
  protected _products: Array<IProduct> ;
  protected events: IEvents;
  protected _productApi: IProductApi;

  constructor(events: IEvents, productApi: IProductApi) {
    super(events);
    this._productApi = productApi;
  }

  get products() {
    return this._products;
  }

  loadProducts() {
    this._productApi.getProducts()
      .then(products => {
        this._products = [...products];
        console.log(products);
        this.changed<CatalogUpdateEvent>(ModelEvents.CatalogUpdated, {products: products});
      });
  }

  getProduct(id: ProductIdType) {
    return this._products.find(item => item.id === id)
  }
}
