import {Component} from "../base/component";
import {IEvents} from "../base/events";

import {CardData, CardSettings} from "../../types";
import {ensureElement, priceLabel} from "../../utils/utils";


const categoryClass = Object({
  'софт-скил': 'card__category_soft',
  'хард-скил': 'card__category_hard',
  'другое': 'card__category_other',
  'дополнительное': 'card__category_additional',
  'кнопка': 'card__category_button'
})

export class CardComponent<T extends HTMLElement, D extends CardData, S extends CardSettings> extends Component<T, D, S> {
  protected _id: string;
  protected readonly _title: HTMLSpanElement;
  protected readonly _price: HTMLSpanElement;
  protected readonly _category: HTMLSpanElement;
  protected readonly _description: HTMLParagraphElement;
  protected readonly _image: HTMLImageElement;

  constructor(events: IEvents, container: T, settings: S) {
    super(events, container, settings);

    this._title = ensureElement<HTMLSpanElement>(this._settings.title, this._container);
    this._price = ensureElement<HTMLSpanElement>(this._settings.price, this._container);
    this._category = this._container.querySelector(this._settings.category);
    this._description = this._container.querySelector(this._settings.description);
    this._image = this._container.querySelector(this._settings.image);
  }

  protected setCategory(category: string) {
    this.setText(this._category, category);
    Object.keys(categoryClass).forEach(key => {
      this._category?.classList.remove(categoryClass[key]);
    })
    if (category in categoryClass) {
      this._category?.classList.add(categoryClass[category]);
    }
  }

  protected setDescription(description: string) {
    this.setText(this._description, description);
  }

  render(data: D): T {
    this._id = data.id;
    this.setText(this._title, data.title);
    this.setText(this._price, data.price ? priceLabel(data.price) : 'Бесценно');
    return undefined;
  }
}
