import {IOrder, IOrderResult, IProduct, ProductIdType} from "./entity";
import {IBuyerInfo} from "./model";

// Модуль содержит перечисления текстовых типов событий, а также описывает соответствующие объекты этих событий
// Данные события используются для коммуникации между архитектруными слоями приложения

export enum ModelEvents {
  CatalogUpdated = 'model:catalog-updated'
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

export enum UIEvents {
  ModalClose = 'ui:modal-close',
  ProductSelect = 'ui:product-select',
  BasketAddProduct = 'ui:basket-add',
  BasketRemoveProduct = 'ui:basket-remove',
  BasketOpen = 'ui:basket-open',
  OrderInfoChanged = 'ui:order-info-changed',
  OrderInfoComplete = 'ui:order-info-complete',
  ContactsInfoChanged = 'ui:contacts-info-changed',
  ContactsInfoComplete = 'ui:contacts-info-complete'
}

export type BuyerInfoChangeEvent = {
  buyer: IBuyerInfo
}

export type ProductEvent = {
  id: ProductIdType
}
