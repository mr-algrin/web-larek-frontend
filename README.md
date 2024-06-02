# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types — Директория с типами
- src/components/application.ts - класс Application - реализующий бизнес логику приложения
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Архитекрута

В качестве основы для реализации данного приложения была выбрана архитектура Model-View-Presenter. Диаграмма представленная ниже отображает процессы взаимодействия между архитектурными слоями приложения.

Слой `Model` реализует хранилище данных для всего приложения, а также предоставляет методы для управления этими данными или выборки.

Слой `View` реализует визуальные компоненты для отображения данных из моделей и взаимодействия с пользователем.

Слой `Presenter` является связующим звеном между слоями Model и View, в данном слое реализуется вся функции бизнес логики:
- Получение данных из моделей
- Изменение данных в моделях через предоставляемые методы
- Обработка событий пользователя
- Перерисовка компонентов пользовательского интерфейса

[UML диаграмма архитектуры](https://viewer.diagrams.net/index.html?tags=%7B%7D&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=yandex-practicum.drawio#R7V1fc6M4Ev80rso%2BeMuA%2Fz5O7GQ3VZO62XV2b%2BdepmSs2NRgxIHsOPfpTwLJgBAOJoAF5iUxQkgtddP961ZL9Iz57vibB9ztM1pDu6cP1seesejpujGbzn4dkR%2B07D0s04f6JCzZeNY6LNOigqX1P8gKB6x0b62hn6iIEbKx5SYLTeQ40MSJMuB56C1Z7RXZyV5dsIGpgqUJbF7KR0DL%2F22t8ZaVa%2BNZdON3aG22rPOpPg5vrID5c%2BOhvcN6dJADwzs7wJtho%2FS3YI3eYkXGQ8%2BYewjh8NfuOIc2nVs%2BZ%2Fw5%2FM4J7Rn3W7yzyYVGfga3HzMe1vI8TMblQQfHu8tqz%2FrP%2Fd7YLdFgt7F%2BzvDq%2BU%2F7jz7r5ADsPe9EH9ukvXs30ff4v3s6yvsd8DaW0zO%2BkLtD90j%2BDk5%2FKUkDDI%2B4D2xrwyqZhDrohfdekYP7fiA89Jams4d44%2BTXhv0PSFhJScjbyhPt%2BBWYkDdHpmaV6sL7VB8lUTpHO5eIHeGjPgY7lxQFrb6Qh8h0Qmftk1%2B%2Fvzx%2FfbDhLqg2JwWLU%2B0ELbJhkjJXLNvKh75C3hp6fXaD0u0jm8pQEQ5%2BLEQDQYhCsSomLuXwsuVzRWsTlUHovlsDDHrGY%2FjI4pfw%2F0vZr0YVXBEU4wF62CLW4EuodxYY0beCaaGFDV%2FpU4jUerUD%2Ff1qEc2YUKZvWwvDpUu1hbF4I3aSkchMnaafuqV9waNgjCIdrJ3sArG3EO0g9t5JFfZAfzxjNoFZ2v6EXb9FRksfs7JtzF5pA1YImKncnBqPdD75wdT%2BBSZg1F4TUL4M5tKsjZ83ghGBfcP2xKCzbyMf3u8xRqxlan%2FD65MV%2FowIlEcoqR2oH07kwjqoQ2Fnmi8zzciFzh0zxQdECL4%2BC%2B%2F526AgXT7E81D%2B71LvAXsJ1CM6Ab9o%2FUDfLsjlL%2Fnf4sZCoJmehECjWRoCGZoEAp386dIh0Li9EOjLysceMPHcBr5%2FzqR3SOsa7HlE3q6XcPoXoXO%2F7HXOfYRxoOchz2cUY89yNgqockqYv1%2FtLKw2TOyTmz8sx91jNoPPwE3KHJ%2FSOaP%2FiVaOyJfLYdtlDjDN%2BQzxFq0pNHOWAbfv4IGhjPD64SBHGRWC3vqmgTHfWflurH%2FfBY6c2adoet9ENvLCLizHwhawL%2BteMv%2BBXM63wNnAiAmhsGbwgExeSKsyc1rfBJYvh4pNJXMAAgH4m2K3OwfsYNJKzCNcFxWr5xKQYTxQG3cXWDrlaSWzba3vDiDQ4%2FSRFUI2BI56xKZ8LYq4qKuVQl1xMxfzw2h9VSx5pZalsQ7laKScQzmROJTC%2FBK5%2FEJXvskVjfmQuSAlj8EkBrNHruITFZvXwDpA2v2A1jta%2BB%2F6%2B9fJiF1%2Bj91aHOMX7%2FzCIaP8J37xPdYEvY6eC674g3L%2BwXVqeV7gHgV9e8%2BEHzvhmLwyEJ%2Bpp8ulIcZsjS%2BgeNAG2DokaZMxmzX3DVn0LeeSpQuCNRTlJRwTeyq%2B9C40NEm2Y0yEdsIxp9oh8gHeY9VcWsFPCedpEorL66y9ARAaHiQo0mee9q160ZHhUAa%2BXUJSiziRcqou9StVcggL%2BmQNQIRcbyTuXAwOGwuqhlrSZk1loGokAVWaURWo4hS10Ur9i%2BqxGzdRKeXywwT%2BVu3Yqpxqb12YatX52QB71hCz9SnrFOiLGzVNU1090yTLo67c4c%2Fv74tsiPz%2FmMv%2F%2FURItv9for8%2Fy%2Bnvj2vz9%2FvDQVKyZqLA5HX4%2B4Y2ScqomL6Z4fKX5dBrutoCGRNA%2FSIBrDAAxfFlSyVSCGZNcwahSpPIFucZN2irya2n9nb5qK3NR5VmKlyXziRNUbJq%2BOyZlFUCcQ1hTfIsAxoL5sVs0NOa3EeLd9WBeV2WDtphp%2FPYaZQTO2WIQxXYaTROipY2LIqdRBSWaqli7KTL1pM77FQ3duqSdTt41aWv3XL6WmNhlpgjpQLMmtYIs4rGO8sItpYIszgQUAlmGQI40guHqE6wKqulimEW7y6nRK5sZP4k%2FF0DfxtImpaQz0F9boAqXkBuJ2BUoxcwzcgOvdwLyNq4WJd4XrbI1Iln4QzTSSeeBcTzsiUnVcRTiwvndTOgdfWMuyiexrQs8Uy1VLV4GjXCzTJz8vUrSmReg67XCDeFxESjsMLURh%2B0VLVEDiUS2ZKo3j3wf9LVjuhcu1uNiKXzA23LP22upk8nb9NloL%2B%2BxqpcP2qSHsKqcUmZrmeZMCJ46QKFyO2ipp9M4Q%2FVza2coKMJhwhqA1kGJA%2FLJKJ540G2wf1UNM9ocXoPN2Z7SkAum9a9ygVT58M5vlk93Y1DrXG06GU7YzeZZhPMZw5M11QLKi40yA0oz2mpyYA2Juuop0Y0l7vPKgQnPhsd04RUpdqDY7K12Jagt%2BXeNKHvd7GIK5%2Fn9WMNfdOzXGzFIwffgAc29LskaUOj2GlT9c1UeP7cDz8U3LxbSWXT1UGjwtCIqY0biSlopzwfZoEmo7whhco%2BTGDITqWpGhFdjoeEBcRrLtdwM64CJOKCJchVaiNkbogknvJVM0TiLoP6%2BFydXQGGeuuHw%2BnsvBjllUdd8CENfVSrPMqyLVqC2HOfWV4MDSo%2B%2BoyPgZ2bB3mHJSLSxJfIMjfa5aQrb6eJD55dcfCnr61duNWjBsLys6LlEJ5%2FCAdYDl8%2BeDk39BrJ8iHGlrNhZ68vFaEK0lNuGE1PD%2BFF5zReztoXohbvYCybI%2F2dRsX377RlMYgx5GkH6JFOIkeC4gRbfM9M77UClOLHJLPoXuyOX5VEXVJn%2FOf6MmU7Qi6GmBDLPeN4xGUmWYM6fXW59IjLsMWfA%2F4N2Db03rv0jeYoohbN1b2o27oQsz7TJApPFmIW87LL03eyIEpVMb2MePFH4eLLI9MVBvS4gVAooDcV9gOMi57yMZt80FDVAWbZBpWWGN85PRK32xKQmfdIFPDuiSiLo6qZj2mSsYX5jDeBXKXz%2F0vcYNGi10SKmSJNIsCmr0%2BtRE1DYQOmNFVRn0pQU3WpikPZxjU1l0JVWQnlxl0h4DQWFjALr8yPeJCCfyapbuDU4q0nVN3NiaKz0aZDTtdOYDQBhhtEZfU8jKg5E6%2Bd%2BY%2BZS5uy2a2F%2FRZdQshaUeiyVhXlmuCndAxTnWG5PLW8TGuR7ct0hxg%2BuJ3tWxMF9z8P6zzN8HM%2B0WUnIFbpFKmXHjoRNmJNCkeT9Q8aqtopavMnXYnS%2B%2BbBgwXfOqfo2k5RIXzVeUONh2mfcYY7vnVebMe1qzlFHdNqMo0EMUU863Y6N4ZxeVdfuyhEFIVggPxWk9lUiEHwHbLXS2fL%2FTmFngrJbHm%2FQFtf%2BEHThSS007eOL94uPRQ3XostFQ5AkEsPUbUQVadm7RmtIa3xfw%3D%3D#%7B%22pageId%22%3A%229SbHhEerrRLEkBQXGAMH%22%7D)

![UML диаграмма архитектуры](./images/architecture-diagram.png)

## Компоненты модели данных (MODEL)

Описаны интерфейсы для получения данных с сервера, а также модели состояний для хранения данных и выполнения действий над ними.

### 1. Сущности приложения

В файле `src/types/entity.ts` представлены модели данных, используемые для оптравки данных на сервер или получения их:
- `IProduct` - хранит информацию о товаре
- `IOrder` - хранит информацию для создания нового заказа
- `IOrderResult` - содержит информацию, в случае успешного создания заказа

### 2. API интерфейсы

Для работы с внешним источником данных (REST API сервером) в файле `src/types/api.ts` описаны интерфейсы `IProductAPI` и `IOrderApi`

`IProductApi` предоставляет методы:
- `getProducts` - получение коллекции всех товаров, хранящихся на сервере
- `getProduct` - получение одного товара по уникальному аттрибуту `id`

`IOrderApi` предоставляет методы:
- `createOrder` - создание нового заказа на сервере, возвращает объект `IOrderResult`

### 3. Модели данных

Для хранения и управления данными в приложении был добавлен набор интерфейсов, реализующих слой Model.

Модель `ICatalogModel` агрегирует коллекцию каталога товаров, а также методы для работы с коллекцией:
- `products` - хранит коллекцию товаров
- `setProducts` - метод установки коллекции товаров
- `getProduct` - метод, для получение одного товара из коллекции по атрибуту `id`

Модель `IBasketModel` описывает свойства и методы для работы с корзиной товаров:
- `products` - хранит товары добавленные в корзину в формате `Map<key, value>`, где `key` - идентификатор товара, `value` - сам товар
- `addProduct` - метод, для добавления товара в корзину
- `removeProduct` - метод, для удаления товара из корзины по идентификатору
- `getTotal` - метод, для получения общего количества товаров в корзине
- `getTotalPrice` - метод для расчёта общей стоимости корзины товаров
- `getProducts` - метод для получения списка товаров добавленных в корзину
- `clear` - метод, для очистки всей корзины, может быть использован после того как заказ оформлен

Модель `IOrderModel` агрегирует информацию пользователя, необходимую для создания заказа:
- `buyer` - интерфейс `IBuyerInfo` описывает объект, хранящий информацию о способе оплаты, адресе доставки, email и телефоне
- `changeBuyerField` - метод для обновления полей объекта `buyer`
- `reset` - метод, для очисти данных о покупателе, может быть использован после того как заказ создан

```ts
export interface IBuyerInfo {
  payment: PaymentType | null
  address: string
  email: string
  phone: string
}
```

## Компоненты отображения (VIEW)

Для реализации слоя отображения данных был описан ряд интерфейсов и реализованы базовые классы компонентов:

- `IComponent<T extends HTMLElement, D extends object, S>` - generic интерфейс базового компонента, в качестве аргументов принимает:
- `IModal` - интерфейс для реализации компонента модального окна, расширяет интерфейс `IComponent`
- `IForm` - интерфейс для реализации компонента формы, расширяет интерфейс `IComponent`

Для данных интерфейсов, был реализован набор базовых классов:

- Класс `Component` - это базовый абстрактный класс, который является основным для всех компонентов интерфейса, реализует интерфейс `IComponent`
- Класс `Modal` - компонент модального окна, наследуется от базового класса `Component`, а также реализует интерфейс `IModal`
- Класс `Form` - абстрактный класс формы, наследуется от базового класса `Component`, а также реализует интерфейс `IForm`

В директории `src/components/view` был реализован набор View компонентов:

- `GalleryComponent` - компонент галерии товаров
- `BasketComponent` - компонент для отображения добавленных в корзину товаров
- `BasketCounterComponent` - компонент значка и счётчика корзины
- `CardBasketComponent` - компонент карточки товара добавленного в корзину
- `CardCatalogComponent` - компонент карточки товара, отображаемой в галерее
- `CardPreviewComponent` - компонент карточки товара, отображаемого в модальном окне
- `OrderForm` - компонент формы, для выбора способа платежа и указания адреса доставки
- `ContactsForm` - компонент формы, для указания контактных данных
- `SuccessComponent` - компонент подтверждения оформленного заказа

Экземпляры классов большинства всех реализованных View компонентов создаются во время инициализации приложения, кроме компонентов `CardBasket` и `CardCatalog`, данные экземпляры создаются динамически во время отрисовки галерии или корзины товаров

В директории `src/types/view` собраны интерфейсы данных и настроек компонентов отображения:

- `BasketData` - описывает данные необходимые для отображения корзины товаров
- `CardBasketData` - описывает данные необходимые для отображения одного элемента карточки товара в корзине
- `CardCatalogData` - описывает данные необходимые для отображения одного элемента карточки товара в каталоге всех товаров
- `CardPreviewData` - описывает данные необходимые для превью выделенной карточки товара
- `ContactsData` - описывает данные необходимые для отображения email и телефона при создании заказа
- `OrderData` - описывает данные необходимые для отображения способа оплаты и адреса доставки при создании заказа
- `SuccessData` - описывает данные необходимые для отображения после успешного офрмления заказа

UML диаграмма классов

![UML диаграмма](./images/class-diagram.png)

## Компоненты представления и бизнес-логики (Presenter)

Слой `Presenter` в текущей реализации приложения по сути представлен одним классом `Application`, данный класс реализует интерфейс `IApplication`.

В файле `src/types/application.ts` описан интерфейс `IApplication`, который реализует глобальное состояние всего приложение и связывает компоненты слоёв `View` и `Model`.
Данный интерфейс описывает методы и свойства, которые должны быть реализованы в классе.

```ts
export interface IApplication {
  // модели
  basketModel: IBasketModel
  catalogModel: ICatalogModel
  orderModel: IOrderModel

  // контейнерные компоненты
  gallery: IGalleryComponent;
  basketCounter: IBasketCounterComponent;

  // модальные компоненты
  modal: IModal;
  modalComponents: ModalComponentsMap;

  init: () => void
  openBasket: () => void
  updateBasketCounter: (count: number) => void
  updateCatalog: (evt: CatalogUpdateEvent) => void
  updateBasket: (evt: BasketUpdateEvent) => void
  updateBuyerInfo: (evt: BuyerInfoUpdateEvent) => void
  selectProduct: (evt: ProductEvent) => void
  addProductToBasket: (evt: ProductEvent) => void
  removeProductFromBasket: (evt: ProductEvent) => void
  createOrder: () => void
  closeModal: () => void
}

```

Одной из главных функцией класса `Application` является обработка событий, генерируемых в слоях `View` и `Model`. Данные передаются через экземпляр класса `EventEmitter`.
Перечисления (enum) событий были описаны в файле `src/types/events.ts`

```ts
export enum ModelEvents {
  CatalogUpdated = 'model:catalog-updated',
  BasketUpdated = 'model:basket-updated',
  BuyerInfoUpdated = 'model:buyer-info-updated'
}
```

```ts
export enum UIEvents {
  ModalClose = 'ui:modal-close',
  ProductSelect = 'ui:product-select',
  BasketAddProduct = 'ui:basket-add',
  BasketRemoveProduct = 'ui:basket-remove',
  BasketOpen = 'ui:basket-open',
  BasketCreateOrder = 'ui:basket-create-order',
  OrderFormChanged = 'ui:order-form-changed',
  OrderFormComplete = 'ui:order-form-complete',
  ContactsFormChanged = 'ui:contacts-form-changed',
  ContactsFormComplete = 'ui:contacts-form-complete'
}
```


Помимо перечислений событий, также описаны интерфейсы для нужных событий:

- `CatalogUpdateEvent` - событие генерируемое при изменении модели данных катагола
- `BasketUpdateEvent` - событие генерируемое при изменении модели корзины товаров
- `BuyerInfoUpdateEvent` - событие генерируеме при изменении данных для создания заказа
- `ProductEvent` - событие генерируемое при выделение карточки товара, добавлении или удалении из корзины
- `FormFieldChangeEvent<T>` - событие генерируемое при изменении полей формы


### P.S. Архитекрута реализована, функционал только частично реализован
