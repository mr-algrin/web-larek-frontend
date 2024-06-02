import {Component} from "../base/component";
import {GalleryData} from "../../types";
import {IEvents} from "../base/events";

export class GalleryComponent extends Component<HTMLElement, GalleryData, unknown> {
  constructor(events: IEvents, container: HTMLElement) {
    super(events, container);
  }

  render(data: GalleryData): HTMLElement {
    this._container.replaceChildren(...data.items);
    return this._container;
  }
}
