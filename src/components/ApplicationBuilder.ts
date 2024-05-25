import {IApplication, IBasketModel, ICatalogModel, IOrderApi, IOrderModel, IProductApi} from "../types";
import {Application} from "./Application";


export class ApplicationBuilder {
  private readonly application: IApplication;

  constructor() {
    this.application = new Application();
  }

  setApiClients(productApiClient: IProductApi, orderApiClient: IOrderApi) {
    this.application.productApi = productApiClient;
    this.application.orderApi = orderApiClient;
    return this;
  }

  setModels(basketModel: IBasketModel, catalogModel: ICatalogModel, orderModel: IOrderModel) {
    this.application.basketModel = basketModel;
    this.application.catalogModel = catalogModel;
    this.application.orderModel = orderModel;
    return this;
  }

  build() {
    return this.application;
  }
}
