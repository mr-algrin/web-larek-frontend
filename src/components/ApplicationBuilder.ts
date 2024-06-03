import {Application} from "./Application";
import {IEvents} from "./base/events";
import {
  IApplication,
  IBasketModel,
  ICatalogModel,
  IModal,
  IOrderModel,
  ModalComponentsMap, IPage
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

  setPages(page: IPage) {
    this.application.page = page;
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
