import {Application} from "./Application";
import {IEvents} from "./base/events";
import {
  IBasketCounterComponent,
  IGalleryComponent,
  IApplication,
  IBasketModel,
  ICatalogModel,
  IModal,
  IOrderModel,
  ModalComponentsMap
} from "../types";



export class ApplicationBuilder {
  private readonly application: IApplication;

  constructor(events: IEvents) {
    this.application = new Application(events);
  }

  setModels(basketModel: IBasketModel, catalogModel: ICatalogModel, orderModel: IOrderModel) {
    this.application.basketModel = basketModel;
    this.application.catalogModel = catalogModel;
    this.application.orderModel = orderModel;
    return this;
  }

  setViews(gallery: IGalleryComponent, basketCounter: IBasketCounterComponent) {
    this.application.gallery = gallery;
    this.application.basketCounter = basketCounter;
    return this;
  }

  setModals(modal: IModal, modalComponents: ModalComponentsMap) {
    this.application.modal = modal;
    this.application.modalComponents = modalComponents;
    return this;
  }


  build() {
    return this.application;
  }
}
