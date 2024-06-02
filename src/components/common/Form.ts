import {IEvents} from "../base/events";
import {Component} from "../base/component";
import {FormData, FormSettings, IForm} from "../../types";
import {ensureAllElements, ensureElement} from "../../utils/utils";


export abstract class Form<D, S> extends Component<HTMLFormElement, FormData<D>, FormSettings<S>> implements IForm<D>{
  protected readonly _errors: HTMLSpanElement;
  protected readonly _submitButton: HTMLButtonElement;
  private readonly _inputs: Map<string, HTMLInputElement> = new Map();

  protected constructor(events: IEvents, container: HTMLFormElement, settings: FormSettings<S>) {
    super(events, container, settings);

    const inputs = ensureAllElements<HTMLInputElement>('input', this._container);
    inputs.map((input) => {
      input.addEventListener('input', this.onInputChange.bind(this));
      this._inputs.set(input.name, input);
    })

    this._errors = ensureElement<HTMLSpanElement>(settings.error, this._container);
    this._submitButton = ensureElement<HTMLButtonElement>(settings.button, this._container);

    this._container.addEventListener('submit', this.onSubmit.bind(this));
  }

  // Метод переопределяемый в наследуемых классах, для определения действия при отправке формы
  protected abstract onSubmit(evt: SubmitEvent): void;
  // Метод переопределяемый в наследуемых классах, для определения действия при изменение значения в Input'е
  protected abstract onInputChange(evt: InputEvent): void;

  setInputValue(name: string, value: string) {
    if (this._inputs.has(name)) {
      this._inputs.get(name).value = value;
    }
  }

  setError(error: string) {
    this.setText(this._errors, error || '');
  }

  setValid(valid:  boolean) {
    this._submitButton.disabled = !valid;
  }

  render(data: FormData<D>): HTMLFormElement {
    this.setError(data.error);
    this.setValid(data.valid);
    return this._container;
  }
}
