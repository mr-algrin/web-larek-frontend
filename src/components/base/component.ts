import {IComponent} from "../../types";


export abstract class Component<T extends  HTMLElement, D extends object, S> implements IComponent<T, D>{
  protected readonly _container: T;
  protected readonly _settings: S;

  protected constructor(container: T, settings?: S) {
    this._container = container;
    this._settings = Object.assign({}, settings);
  }

  protected setText(element: HTMLElement, value: string) {
    if (element) {
      element.textContent = value || '';
    }
  }

  protected setImage(element: HTMLImageElement, src: string, alt?: string) {
    if (element && src) {
      element.src = src;
      if (alt) {
        element.alt = alt;
      }
    }
  }

  abstract render(data?: D): T;
}
