import {PaymentType} from "../model";

export interface OrderData {
  payment: PaymentType | null
  address: string
}

export interface OrderSettings {
  cardPayment: string;
  cashPayment: string;
  address: string;
  nextButton: string;
}
