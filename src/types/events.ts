import {IOrder, IOrderResult, IProduct, ProductIdType} from "./entity";
import {IBuyerInfo} from "./model";

// Модуль содержит перечисления текстовых типов событий, а также описывает соответствующие объекты этих событий
// Данные события используются для коммуникации между архитектруными слоями приложения

export enum ModelEvents {
  CatalogUpdated = 'model:catalog-updated',
  BasketUpdated = 'model:basket-updated',
  BuyerInfoUpdated = 'model:buyer-info-updated'
}

export type CatalogUpdateEvent = {
  products: Array<IProduct>
}

export type BasketUpdateEvent = {
  products: Array<IProduct>
  itemsCount: number
  totalPrice: number
}

export type BuyerInfoUpdateEvent = {
  buyer: IBuyerInfo
}


export enum UIEvents {
  ModalClose = 'ui:modal-close',
  ProductSelect = 'ui:product-select',
  BasketAddProduct = 'ui:basket-add',
  BasketRemoveProduct = 'ui:basket-remove',
  BasketOpen = 'ui:basket-open',
  BasketCreateOrder = 'ui:basket-create-order',
  OrderFormChanged = 'ui:order-form-changed',
  OrderFormCompleted = 'ui:order-form-completed',
  ContactsFormChanged = 'ui:contacts-form-changed',
  ContactsFormCompleted = 'ui:contacts-form-completed',
  SuccessOrder = 'ui:success-order'
}

export type ProductEvent = {
  id: ProductIdType
}

export type FormFieldChangeEvent<V> = {
  key: string;
  value: V;
}
