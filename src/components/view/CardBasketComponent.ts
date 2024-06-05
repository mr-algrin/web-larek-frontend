import {IEvents} from "../base/events";

import {CardBasketData, CardBasketSettings, ProductEvent, UIEvents} from "../../types";
import {ensureElement} from "../../utils/utils";
import {CardComponent} from "./CardComponent";


export class CardBasketComponent extends CardComponent<HTMLLIElement, CardBasketData, CardBasketSettings>{
  protected readonly _itemIndex: HTMLSpanElement;
  protected readonly _button: HTMLButtonElement;

  constructor(events: IEvents, container: HTMLLIElement, settings: CardBasketSettings) {
    super(events, container, settings);

    this._itemIndex = ensureElement<HTMLSpanElement>(this._settings.itemIndex, this._container);
    this._button = ensureElement<HTMLButtonElement>(this._settings.deleteButton, this._container);
    this._button?.addEventListener('click', () => {
      this._events.emit<ProductEvent>(UIEvents.BasketRemoveProduct, {id: this._id});
    })
  }

  render(data: CardBasketData) {
    super.render(data);
    this.setText(this._itemIndex, String(data.index));
    return this._container;
  }
}
