import {Component} from "../base/component";
import {SuccessData, SuccessSettings, UIEvents} from "../../types";
import {ensureElement, priceLabel} from "../../utils/utils";
import {IEvents} from "../base/events";


export class SuccessComponent extends Component<HTMLDivElement, SuccessData, SuccessSettings> {
  protected _description: HTMLParagraphElement;
  protected _successButton: HTMLButtonElement;

  constructor(events: IEvents, container: HTMLDivElement, settings: SuccessSettings) {
    super(events, container, settings);

    this._description = ensureElement<HTMLParagraphElement>(this._settings.description, this._container);
    this._successButton = ensureElement<HTMLButtonElement>(this._settings.successButton, this._container);

    this._successButton?.addEventListener('click', () => {
      this._events.emit(UIEvents.SuccessOrder);
    });
  }

  render(data: SuccessData): HTMLDivElement {
    this.setText(this._description, `Списано ${priceLabel(data.totalPrice)}`);
    return this._container;
  }
}
