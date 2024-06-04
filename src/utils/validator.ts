import {ContactsData, FormState, OrderData} from "../types";

export interface IFormValidator<T> {
  validate: (data: T) => FormState
}

export class OrderFormValidator implements IFormValidator<OrderData>{
  validate(data: OrderData): FormState {
    let error = '';
    let valid = false;

    if (data.payment === null && data.address.length === 0)
      error = 'Необходимо указать способ оплаты и адрес'
    else if (data.payment === null)
      error = 'Необходимо выбрать способ оплаты';
    else if (data.address.length === 0)
      error = 'Необходимо указать адрес';
    else valid = true;

    return {valid, error};
  }
}

export class ContactsFormValidator implements IFormValidator<ContactsData> {
  validate(data: ContactsData): FormState {
    return {error: '', valid: false}
  }
}
