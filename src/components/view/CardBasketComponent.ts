import {Component} from "../base/component";
import {IEvents} from "../base/events";

import {CardBasketData, CardBasketSettings, ProductEvent, UIEvents} from "../../types";
import {ensureElement, priceLabel} from "../../utils/utils";


export class CardBasketComponent extends Component<HTMLLIElement, CardBasketData, CardBasketSettings> {
  protected _id: string;
  protected readonly _itemIndex: HTMLSpanElement;
  protected readonly _title: HTMLSpanElement;
  protected readonly _price: HTMLSpanElement;
  protected readonly _button: HTMLButtonElement;

  constructor(events: IEvents, container: HTMLLIElement, settings: CardBasketSettings) {
    super(events, container, settings);

    this._itemIndex = ensureElement<HTMLSpanElement>(this._settings.itemIndex, this._container);
    this._title = ensureElement<HTMLSpanElement>(this._settings.title, this._container);
    this._price = ensureElement<HTMLSpanElement>(this._settings.price, this._container);
    this._button = ensureElement<HTMLButtonElement>(this._settings.deleteButton, this._container);
    this._button.addEventListener('click', () => {
      this._events.emit<ProductEvent>(UIEvents.BasketRemoveProduct, {id: this._id});
    })
  }

  render(data: CardBasketData) {
    this._id = data.id;
    this.setText(this._itemIndex, String(data.index));
    this.setText(this._title, data.title);
    this.setText(this._price, data.price ? priceLabel(data.price) : 'Бесценно');
    return this._container;
  }
}
