import {IOrder, IOrderResult, IProduct, ProductIdType} from "./entity";

export interface ICatalogModel {
  products: Array<IProduct>
  loadProducts: () => void
  getProduct: (id: ProductIdType) => IProduct | undefined
}

export interface IBasketModel {
  addProduct: (product: IProduct) => void
  removeProduct: (id: ProductIdType) => void
  getProducts: () => Array<IProduct>
  getTotal: () => number
  getTotalPrice: () => number
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
  createOrder: (order: IOrder) => Promise<IOrderResult>
  changeBuyerField: <K extends keyof IBuyerInfo>(key: K, value: IBuyerInfo[K]) => void
  reset: () => void
}
