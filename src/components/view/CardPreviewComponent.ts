import {Component} from "../base/component";
import {CardPreviewData, CardPreviewSettings, ProductEvent, UIEvents} from "../../types";
import {IEvents} from "../base/events";
import {ensureElement, priceLabel} from "../../utils/utils";

export class CardPreviewComponent extends Component<HTMLDivElement, CardPreviewData, CardPreviewSettings> {
  protected _id: string;
  protected readonly _title: HTMLElement;
  protected readonly _category: HTMLSpanElement;
  protected readonly _image: HTMLImageElement;
  protected readonly _price: HTMLSpanElement;
  protected readonly _text: HTMLParagraphElement;
  protected readonly _button: HTMLButtonElement;

  constructor(events: IEvents, container: HTMLDivElement, settings: CardPreviewSettings) {
    super(events, container, settings);

    this._category = ensureElement<HTMLSpanElement>(this._settings.category, this._container);
    this._title = ensureElement<HTMLElement>(this._settings.title, this._container);
    this._image = ensureElement<HTMLImageElement>(this._settings.image, this._container);
    this._price = ensureElement<HTMLSpanElement>(this._settings.price, this._container);
    this._text = ensureElement<HTMLParagraphElement>(this._settings.text, this._container);

    this._button = ensureElement<HTMLButtonElement>(this._settings.button, this._container);
    this._button?.addEventListener('click', () => {
      this._events.emit<ProductEvent>(UIEvents.BasketAddProduct, {id: this._id});
    });
  }

  render(data: CardPreviewData): HTMLDivElement {
    this._id = data.id;
    this.setText(this._title, data.title);
    this.setText(this._category, data.category);
    this.setText(this._price, data.price ? priceLabel(data.price) : 'Бесценно');
    this.setText(this._text, data.description);
    this.setImage(this._image, data.image);
    return this._container;
  }
}
