import {Component} from "../base/component";
import {IEvents} from "../base/events";

import {CardCatalogData, CardCatalogSettings, ProductEvent, UIEvents} from "../../types";
import {ensureElement, priceLabel} from "../../utils/utils";


export class CardCatalogComponent extends Component<HTMLButtonElement, CardCatalogData, CardCatalogSettings> {
  protected _cardId: string;
  protected readonly _category: HTMLSpanElement;
  protected readonly _image: HTMLImageElement;
  protected readonly _title: HTMLElement;
  protected readonly _price: HTMLSpanElement;

  constructor(events: IEvents, container: HTMLButtonElement, settings: CardCatalogSettings) {
    super(events, container, settings);

    // инициализация элементов карточки
    this._category = ensureElement<HTMLSpanElement>(settings.category, this._container);
    this._image = ensureElement<HTMLImageElement>(settings.image, this._container);
    this._title = ensureElement<HTMLElement>(settings.title, this._container);
    this._price = ensureElement<HTMLSpanElement>(settings.price, this._container);

    // установка обработчиков
    this._container.addEventListener('click', () => {
      this._events.emit<ProductEvent>(UIEvents.ProductSelect, {id: this._cardId});
    })
  }

  render(data: CardCatalogData): HTMLButtonElement {
    this._cardId = data.id;
    this.setText(this._category, data.category);
    this.setImage(this._image, data.image, `Изображение ${data.title}`);
    this.setText(this._title, data.title);
    this.setText(this._price, data.price ? priceLabel(data.price || 0) : 'Бесценно');
    return this._container;
  }
}
