import {IEvents} from "../base/events";
import {Form} from "../common/Form";
import {ContactsData, FormData, FormFieldChangeEvent, FormSettings, UIEvents} from "../../types";

export class ContactsForm extends Form<ContactsData, unknown> {

  constructor(events: IEvents, container: HTMLFormElement, settings: FormSettings<unknown>) {
    super(events, container, settings);
  }

  protected onSubmit(evt: SubmitEvent): void {
    evt.preventDefault();
    this._events.emit(UIEvents.ContactsFormCompleted);
  }

  protected onInputChange(evt: InputEvent) {
    const input = evt.target as HTMLInputElement;
    this._events.emit<FormFieldChangeEvent<string>>(UIEvents.ContactsFormChanged, {key: input.name, value: input.value});
  }

  render(data: FormData<ContactsData>): HTMLFormElement {
    super.render(data);
    this.setInputValue('email', data.email);
    this.setInputValue('phone', data.phone);
    return this._container;
  }
}
