import {Component} from "../base/component";
import {IModal, ModalData, ModalSettings, UIEvents} from "../../types";
import {IEvents} from "../base/events";
import {ensureElement} from "../../utils/utils";


export class Modal extends Component<HTMLDivElement, ModalData, ModalSettings> implements IModal {
  protected _closeButton: HTMLButtonElement;
  protected _content: HTMLDivElement;

  constructor(events: IEvents, container: HTMLDivElement, settings: ModalSettings) {
    super(events, container, settings);

    this._closeButton = ensureElement<HTMLButtonElement>(this._settings.closeButton, this._container);
    this._content = ensureElement<HTMLDivElement>(this._settings.content, this._container);

    this._closeButton.addEventListener('click', this.closeHandler.bind(this));
    this._container.addEventListener('click', this.closeHandler.bind(this));
    this._content.addEventListener('click', (evt) => evt.stopPropagation());
  }

  private closeHandler() {
    this._events.emit(UIEvents.ModalClose);
  }

  close(): void {
    this._container.classList.remove(this._settings.activeClass);
  }

  open(): void {
    this._container.classList.add(this._settings.activeClass);
  }

  setContent(content: HTMLElement): void {
    this._content.replaceChildren(content);
  }

  render(data: ModalData): HTMLDivElement {
    this.setContent(data.content);
    return this._container;
  }
}
