import {Component} from "../base/component";
import {CardPreviewData, CardPreviewSettings} from "../../types";
import {IEvents} from "../base/events";
import {ensureElement} from "../../utils/utils";

export class CardPreviewComponent extends Component<HTMLDivElement, CardPreviewData, CardPreviewSettings> {
  protected _title: HTMLElement;
  protected _category: HTMLSpanElement;
  protected _button: HTMLButtonElement;

  constructor(events: IEvents, element: HTMLDivElement, settings: CardPreviewSettings) {
    super(element, settings);

    this._button = ensureElement<HTMLButtonElement>(this._settings.button, this._container);
  }

  render(data: CardPreviewData): HTMLDivElement {

    return this._container;
  }
}
