import {Component} from "../base/component";
import {IEvents} from "../base/events";
import {IPage, PageData, PageSettings, UIEvents} from "../../types";
import {ensureElement} from "../../utils/utils";

export class PageComponent extends Component<HTMLDivElement, PageData, PageSettings> implements IPage{
  protected readonly _wrapper: HTMLDivElement;
  protected readonly _gallery: HTMLElement;
  protected readonly _counter: HTMLSpanElement;
  protected readonly _button: HTMLButtonElement;

  constructor(events: IEvents, container: HTMLDivElement, settings: PageSettings) {
    super(events, container, settings);

    this._wrapper = ensureElement<HTMLDivElement>(this._settings.wrapper, this._container);
    this._gallery = ensureElement<HTMLElement>(this._settings.gallery, this._container);
    this._counter = ensureElement<HTMLSpanElement>(this._settings.basketCounter, this._container);
    this._button = ensureElement<HTMLButtonElement>(this._settings.basketButton, this._container);
    this._button?.addEventListener('click', () => {
      this._events.emit(UIEvents.BasketOpen);
    })
  }

  setCounter(count: number): void {
    this.setText(this._counter, String(count));
  }

  setGallery(items: Array<HTMLButtonElement>): void {
    this._gallery?.replaceChildren(...items);
  }

  setLocked(lock: boolean): void {
    if (lock) {
      this._wrapper?.classList.add(this._settings.lockedClass);
    }
    else {
      this._wrapper?.classList.remove(this._settings.lockedClass);
    }
  }

  render(data: PageData): HTMLDivElement {
    this.setCounter(data.count);
    this.setLocked(data.locked);
    this.setGallery(data.galleryItems);
    return this._container;
  }
}
