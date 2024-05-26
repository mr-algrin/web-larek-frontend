import './scss/styles.scss';

import {ProductApi} from "./components/ProductApi";
import {OrderApi} from "./components/OrderApi";
import {EventEmitter} from "./components/base/events";
import {BasketModel} from "./components/model/BasketModel";
import {CatalogModel} from "./components/model/CatalogModel";
import {ApplicationBuilder} from "./components/ApplicationBuilder";

import {CatalogEventsEnum, IApplication, CatalogUpdateEvent} from "./types";

import {API_URL, CDN_URL} from "./utils/constants";
import {OrderModel} from "./components/model/OrderModel";

// Инициализация шины данных
const events = new EventEmitter();

// Инициализация API клиентов
const productApiClient = new ProductApi(CDN_URL, API_URL);
const orderApiClient = new OrderApi(API_URL);

// Инициализация моделей
const basketModel = new BasketModel(events);
const catalogModel = new CatalogModel(events);
const orderModel = new OrderModel(events);

// Сборка приложения
const application: IApplication =
  new ApplicationBuilder()
    .setApiClients(productApiClient, orderApiClient)
    .setModels(basketModel, catalogModel, orderModel)
    .build()

events.on<CatalogUpdateEvent>(CatalogEventsEnum.CatalogUpdated, (event ) => {
  console.log('products', event.products);
});

// Получение данных с сервера
application.productApi.getProducts()
  .then(products => {
    application.catalogModel.setProducts(products);
  });


