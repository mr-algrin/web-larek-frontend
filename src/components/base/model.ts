import {IEvents} from "./events";

export abstract class Model {
  protected events: IEvents;

  protected constructor(events: IEvents) {
    this.events = events;
  }

  protected changed<T extends object>(event: string, data?: T) {
    this.events.emit(event, data);
  }
}
