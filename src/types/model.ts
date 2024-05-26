import {IProduct, ProductIdType} from "./entity";

export interface ICatalogModel {
  products: Array<IProduct>
  setProducts: (items: Array<IProduct>) => void
  getProduct: (id: ProductIdType) => IProduct | null
}

export interface IBasketModel {
  products: Map<ProductIdType, IProduct>
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
  changeBuyerField: <K extends keyof IBuyerInfo>(key: K, value: IBuyerInfo[K]) => void
  reset: () => void
}
