// Модуль описывает сущности, которые используються в приложении

export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number;
}

export type ProductIdType = IProduct["id"];


export interface IOrder {
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: Array<string>;
}

export interface IOrderResult {
  id: string
  total: number
}
