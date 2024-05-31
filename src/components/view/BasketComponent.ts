import {Component} from "../base/component";
import {BasketData, BasketSettings} from "../../types";
import {IEvents} from "../base/events";
import {ensureElement, priceLabel} from "../../utils/utils";


export class BasketComponent extends Component<HTMLDivElement, BasketData, BasketSettings> {
  protected _events: IEvents;
  protected _listElement: HTMLUListElement;
  protected _button: HTMLButtonElement;
  protected _price: HTMLSpanElement;

  constructor(events: IEvents, container: HTMLDivElement, settings: BasketSettings) {
    super(container, settings);
    this._events = events;
    this._listElement = ensureElement<HTMLUListElement>(this._settings.items, this._container);
    this._price = ensureElement<HTMLSpanElement>(this._settings.price, this._container);
    this._button = ensureElement<HTMLButtonElement>(this._settings.button, this._container);

  }

  render(data: BasketData): HTMLDivElement {
    this._button.disabled = (data.items.length === 0);
    this._listElement.replaceChildren(...data.items);
    this.setText(this._price, priceLabel(data.price))
    return this._container;
  }
}
