import {IOrder, IProduct, ProductIdType} from "./entity";
import {IOrderResult} from "./api";
import {IBuyerInfo} from "./model";

// Модуль содержит перечисления текстовых типов событий, а также описывает соответствующие объекты этих событий
// Данные события используются для коммуникации между архитектруными слоями приложения

export enum CatalogEventsEnum {
  CatalogUpdated = 'catalog:updated'
}

export type CatalogUpdateEvent = {
  products: Array<IProduct>
}

export enum  OrderEventsEnum {
  OrderPrepared = 'order:prepared',
  OrderCreated = 'order:created'
}

export type OrderPreparedEvent = {
  order: IOrder
}

export type OrderCreatedEvent = {
  result: IOrderResult
}

export enum UIEventsEnum {
  ProductSelected = 'ui:product-selected',
  BasketAddProduct = 'ui:basket-add',
  BasketRemoveProduct = 'ui:basket-remove',
  BasketOpen = 'ui:basket-open',
  BuyerInfoChanged = 'ui:buyer-info-changed'
}

export type BuyerInfoChangeEvent = {
  buyer: IBuyerInfo
}

export type ProductActionEvent = {
  id: ProductIdType
}
