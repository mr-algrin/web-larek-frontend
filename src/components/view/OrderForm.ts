import {Form} from "../common/Form";
import {
  FormSettings,
  FormData,
  OrderData,
  OrderSettings,
  UIEvents,
  FormFieldChangeEvent,
  PaymentType
} from "../../types";
import {IEvents} from "../base/events";
import {ensureElement} from "../../utils/utils";


export class OrderForm extends Form<OrderData, OrderSettings> {
  protected readonly _cashButton: HTMLButtonElement;
  protected readonly _cardButton: HTMLButtonElement;

  constructor(events: IEvents, container: HTMLFormElement, settings: FormSettings<OrderSettings>) {
    super(events, container, settings);
    this._cashButton = ensureElement<HTMLButtonElement>(this._settings.cashButton, this._container);
    this._cardButton = ensureElement<HTMLButtonElement>(this._settings.cardButton, this._container);

    this._cashButton?.addEventListener('click', () => {
      this.changeValue('payment', 'cash');
    });
    this._cardButton?.addEventListener('click', () => {
      this.changeValue('payment', 'card');
    });
  }

  protected onSubmit(evt: SubmitEvent) {
    evt.preventDefault();
    this._events.emit(UIEvents.OrderFormCompleted);
  }

  protected onInputChange(evt: InputEvent) {
    const input = evt.target as HTMLInputElement;
    this.changeValue(input.name, input.value);
  }

  private changeValue(key: string, value: string | PaymentType) {
    this._events.emit<FormFieldChangeEvent<string | PaymentType>>(UIEvents.OrderFormChanged, {
      key: key,
      value: value
    });
  }

  private setButtonState(button: HTMLButtonElement, active: boolean) {
    if (button) {
      if (active)
        button.classList.add(this._settings.activeClass);
      else button.classList.remove(this._settings.activeClass);
    }
  }

  render(data: FormData<OrderData>): HTMLFormElement {
    super.render(data);
    this.setInputValue('address', data.address);
    this.setButtonState(this._cardButton, data.payment === 'card');
    this.setButtonState(this._cashButton, data.payment === 'cash');
    return this._container;
  }
}
