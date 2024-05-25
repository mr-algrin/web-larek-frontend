import {IProduct, ProductIdType} from "./entity";
import {IEvents} from "../components/base/events";

export interface ICatalogModel {
  products: Array<IProduct>
  setProducts: (items: Array<IProduct>) => void
  getProduct: (id: ProductIdType) => IProduct | null
}

export interface ICatalogModelConstructor {
  new(events: IEvents): ICatalogModel
}

export type BasketProductCount = {
  product: IProduct;
  count: number;
}

export interface IBasketModel {
  products: Map<ProductIdType, BasketProductCount>
  addProduct: (product: IProduct) => void
  removeProduct: (id: ProductIdType) => void
  getTotal: () => number
  clear: () => void
}

export type PaymentType = 'card' | 'cash'

export interface IBuyerInfo {
  payment: PaymentType | null
  address: string
  email: string
  phone: string
}

export interface IOrderModel {
  buyer: IBuyerInfo
  changeBuyerInfo: <K extends keyof IBuyerInfo>(key: K, value: IBuyerInfo[K]) => void
  reset: () => void
}
