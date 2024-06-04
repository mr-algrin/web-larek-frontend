import './scss/styles.scss';

import {ProductApi} from "./components/ProductApi";
import {OrderApi} from "./components/OrderApi";
import {EventEmitter} from "./components/base/events";
import {BasketModel} from "./components/model/BasketModel";
import {CatalogModel} from "./components/model/CatalogModel";
import {ApplicationBuilder} from "./components/ApplicationBuilder";

import {IApplication, ModalComponentsMap, ModalState} from "./types";

import {API_URL, CDN_URL, settings} from "./utils/constants";
import {cloneTemplate, ensureElement} from "./utils/utils";

import {Modal} from "./components/common/Modal";
import {OrderModel} from "./components/model/OrderModel";
import {BasketComponent} from "./components/view/BasketComponent";

import * as templates from './components/templates'
import {SuccessComponent} from "./components/view/SuccessComponent";
import {CardPreviewComponent} from "./components/view/CardPreviewComponent";
import {ContactsForm} from "./components/view/ContactsForm";
import {OrderForm} from "./components/view/OrderForm";
import {PageComponent} from "./components/view/PageComponent";
import {ContactsFormValidator, OrderFormValidator} from "./utils/validator";


// Инициализация шины данных
const events = new EventEmitter();

// Инициализация API клиентов
const productApiClient = new ProductApi(CDN_URL, API_URL);
const orderApiClient = new OrderApi(API_URL);

// Инициализация моделей
const basketModel = new BasketModel(events);
const catalogModel = new CatalogModel(events, productApiClient);
const orderModel = new OrderModel(events, orderApiClient);

// валидаторы
const orderValidator = new OrderFormValidator();
const contactsValidator = new ContactsFormValidator();

// Инициализация контейнерных компонентов
const page = new PageComponent(events, ensureElement<HTMLDivElement>('.page'), settings.page);

// инициализация модальных компонентов
const modal = new Modal(events, ensureElement<HTMLDivElement>(settings.modal.container), settings.modal);
const modalComponents: ModalComponentsMap = {
  [ModalState.basket]: new BasketComponent(events, cloneTemplate<HTMLDivElement>(templates.basketTemplate), settings.basket),
  [ModalState.success]: new SuccessComponent(events,cloneTemplate<HTMLDivElement>(templates.successTemplate), settings.success),
  [ModalState.preview]: new CardPreviewComponent(events, cloneTemplate<HTMLDivElement>(templates.cardPreviewTemplate), settings.preview),
  [ModalState.contacts]: new ContactsForm(events, cloneTemplate<HTMLFormElement>(templates.contactsTemplate), settings.form),
  [ModalState.order]: new OrderForm(events, cloneTemplate<HTMLFormElement>(templates.orderTemplate), {...settings.form, ...settings.orderForm})
}

// Сборка приложения
const application: IApplication =
  new ApplicationBuilder(events)
    .setPages(page)
    .setModals(modal, modalComponents)
    .setModels(basketModel, catalogModel, orderModel)
    .setValidators(orderValidator, contactsValidator)
    .build()

application.init();
