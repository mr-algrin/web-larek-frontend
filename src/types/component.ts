import {
  ModalData,
  BasketData,
  ContactsData,
  OrderData,
  SuccessData,
  CardPreviewData,
  FormData, PageData
} from "./view";

export interface IComponent<T extends HTMLElement, D extends object> {
  render(data?: D): T;
}

export interface IModal extends IComponent<HTMLDivElement, ModalData> {
  open: () => void
  close: () => void
  setContent: (content: HTMLElement) => void
}

export interface IForm<D> extends IComponent<HTMLFormElement, FormData<D>> {
  setInputValue: (name: string, value: string) => void
  setError: (error: string) => void
  setValid: (valid: boolean) => void
}


export interface IPage extends IComponent<HTMLDivElement, PageData> {
  setLocked: (lock: boolean) => void,
  setGallery: (items: Array<HTMLButtonElement>) => void
  setCounter: (count: number) => void
}

export enum ModalState {
  preview,
  basket,
  contacts,
  order,
  success
}


export type ModalComponentsMap = {
  [ModalState.preview]: IComponent<HTMLDivElement, CardPreviewData>
  [ModalState.basket]: IComponent<HTMLDivElement, BasketData>
  [ModalState.success]: IComponent<HTMLDivElement, SuccessData>
  [ModalState.contacts]: IForm<ContactsData>
  [ModalState.order]: IForm<OrderData>
}
