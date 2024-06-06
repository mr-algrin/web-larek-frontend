import {CardPreviewData, CardPreviewSettings, ProductEvent, UIEvents} from "../../types";
import {IEvents} from "../base/events";
import {ensureElement} from "../../utils/utils";
import {CardComponent} from "./CardComponent";


export class CardPreviewComponent extends CardComponent<HTMLDivElement, CardPreviewData, CardPreviewSettings> {
  protected readonly _button: HTMLButtonElement;

  constructor(events: IEvents, container: HTMLDivElement, settings: CardPreviewSettings) {
    super(events, container, settings);

    this._button = ensureElement<HTMLButtonElement>(this._settings.button, this._container);
    this._button?.addEventListener('click', () => {
      this._events.emit<ProductEvent>(UIEvents.BasketAddProduct, {id: this._id});
    });
  }

  render(data: CardPreviewData): HTMLDivElement {
    super.render(data);
    // Если товар в корзине или у него не указана цена, его нельзя добавить в корзину
    this._button.disabled = data.inBasket || data.price === null;
    this.setCategory(data.category);
    this.setDescription(data.description);
    this.setImage(this._image, data.image);
    return this._container;
  }
}
