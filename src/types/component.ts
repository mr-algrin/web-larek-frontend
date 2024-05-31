import {
  GalleryData,
  BasketCounterData,
  ModalData,
  BasketData,
  ContactsData,
  OrderData,
  SuccessData,
  CardPreviewData
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
  [ModalState.contacts]: IComponent<HTMLFormElement, ContactsData>
  [ModalState.order]: IComponent<HTMLFormElement, OrderData>
}
