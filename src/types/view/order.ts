import {PaymentType} from "../model";

export interface OrderData {
  payment: PaymentType | null
  address: string
}

export interface OrderSettings {
  cardButton: string;
  cashButton: string;
  activeClass: string;
}
