import {
  GalleryData,
  BasketCounterData,
  ModalData,
  BasketData,
  ContactsData,
  OrderData,
  SuccessData,
  CardPreviewData,
  FormData
} from "./view";

export interface IComponent<T extends HTMLElement, D extends object> {
  render(data?: D): T;
}

export type IGalleryComponent = IComponent<HTMLElement, GalleryData>
export type IBasketCounterComponent = IComponent<HTMLButtonElement, BasketCounterData>

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
