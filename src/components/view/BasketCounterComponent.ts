import {Component} from "../base/component";
import {BasketCounterData, BasketCounterSettings, UIEvents} from "../../types";
import {ensureElement} from "../../utils/utils";
import {IEvents} from "../base/events";


export class BasketCounterComponent extends Component<HTMLButtonElement, BasketCounterData , BasketCounterSettings> {
  protected _counter: HTMLSpanElement;

  constructor(events: IEvents,  container: HTMLButtonElement, settings: BasketCounterSettings) {
    super(container, settings);

    this._counter = ensureElement<HTMLSpanElement>(settings.counter, this._container);
    this._container.addEventListener('click', () => {
      events.emit(UIEvents.BasketOpen);
    });
  }

  render(data: BasketCounterData): HTMLButtonElement {
    this.setText(this._counter, String(data.count));
    return this._container;
  }

}
