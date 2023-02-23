import { Injectable } from '@angular/core';
import { Observer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyObservable<T> {
  private observers: Observer<T>[] = [];
  private buffer: T[] = []

  public next(value: T) {
    this.buffer.push(value)
    for (const observer of this.observers) {
      observer.next(value);
    }
  }

  public error(error: unknown) {
    for (const observer of this.observers) {
      observer.error(error);
    }
  }

  public complete() {
    for (const observer of this.observers) {
      observer.complete();
    }
  }

  public subscribe(observer: Observer<T>, value: T) {
    this.buffer.push(value)
    this.observers.push(observer)
    this.observers.forEach(o =>
      o.next(value)
    )
    return {
      unsubscribe: () => {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex != -1)
          this.observers.splice(observerIndex, 1)
      }
    }
  }
}
