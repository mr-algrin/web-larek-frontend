import {ContactsData, FormState, OrderData} from "../types";

export interface IFormValidator<T> {
  validate: (data: T) => FormState
}

const isValidaEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const isValidPhone = (phone: string) => {
  const re = /\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}/;
  return re.test(phone);
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
    let error = '';
    let valid = false;
    if (data.email?.length === 0 && data.phone?.length === 0)
      error = 'Необходимо указать электронный адрес и телефон';
    else if (!isValidaEmail(data.email))
      error = 'Необходимо указать корректный электронный адрес';
    else if (!isValidPhone(data.phone))
      error = 'Необходимо указать корректный номер телефона в формате +7 (000) 000-00-00';
    else valid = true;

    return {valid, error}
  }
}
