import {IOrder, IProduct} from "./entity";

// Модуль описывает интрефейсы для API клиентов

export interface IOrderResult {
  total: number
}

export interface IOrderApi {
  createOrder: (order: IOrder) => Promise<IOrderResult | null>
}

export interface IProductApi {
  getProducts: () => Promise<Array<IProduct>>
  getProduct: (id: string) => Promise<IProduct | null>
}
