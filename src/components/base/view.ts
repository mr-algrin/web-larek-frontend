

export abstract class View<T extends  HTMLElement, D extends object> {
  protected element: T;

  protected constructor(element: T) {
    this.element = element;
  }

  abstract render(data: D) : T;
}
