import {Component} from "../base/component";
import {GalleryData} from "../../types";

export class GalleryComponent extends Component<HTMLElement, GalleryData, unknown> {
  constructor(container: HTMLElement) {
    super(container);
  }

  render(data: GalleryData): HTMLElement {
    this._container.replaceChildren(...data.items);
    return this._container;
  }
}
