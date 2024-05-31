import {Form} from "../common/Form";
import {FormSettings, FormData, OrderData, OrderSettings} from "../../types";
import {IEvents} from "../base/events";
import {ensureElement} from "../../utils/utils";


export class OrderForm extends Form<OrderData, OrderSettings> {
  protected readonly _cashButton: HTMLButtonElement;
  protected readonly _cardButton: HTMLButtonElement;

  constructor(events: IEvents, container: HTMLFormElement, settings: FormSettings<OrderSettings>) {
    super(events, container, settings);
    this._cashButton = ensureElement<HTMLButtonElement>(this._settings.cashButton, this._container);
    this._cardButton = ensureElement<HTMLButtonElement>(this._settings.cardButton, this._container);
  }

  protected onSubmit(evt: SubmitEvent) {
  //
  }

  protected onInputChange(evt: InputEvent) {
  //
  }

  render(data: FormData<OrderData>): HTMLFormElement {
    super.render(data);
    this.setInputValue('address', data.address);
    return this._container;
  }
}
