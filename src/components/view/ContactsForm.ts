import {IEvents} from "../base/events";
import {Form} from "../common/Form";
import {ContactsData, FormData, FormSettings} from "../../types";

export class ContactsForm extends Form<ContactsData, unknown> {

  constructor(events: IEvents, container: HTMLFormElement, settings: FormSettings<unknown>) {
    super(events, container, settings);
  }

  protected onSubmit(evt: SubmitEvent): void {
    //
  }

  protected onInputChange(evt: InputEvent) {
    //
  }


  render(data: FormData<ContactsData>): HTMLFormElement {
    super.render(data);
    this.setInputValue('email', data.email);
    this.setInputValue('phone', data.phone);
    return this._container;
  }
}
