import {IEvents} from "../base/events";

import {CardCatalogData, CardSettings, ProductEvent, UIEvents} from "../../types";
import {CardComponent} from "./CardComponent";


export class CardCatalogComponent extends CardComponent<HTMLButtonElement, CardCatalogData, CardSettings> {

  constructor(events: IEvents, container: HTMLButtonElement, settings: CardSettings) {
    super(events, container, settings);

    // установка обработчика
    this._container.addEventListener('click', () => {
      this._events.emit<ProductEvent>(UIEvents.ProductSelect, {id: this._id});
    })
  }

  render(data: CardCatalogData): HTMLButtonElement {
    super.render(data);
    this.setCategory(data.category);
    this.setImage(this._image, data.image, `Изображение ${data.title}`);
    return this._container;
  }
}
