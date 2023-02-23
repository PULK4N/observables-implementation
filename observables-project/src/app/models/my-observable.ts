import { Injectable } from '@angular/core';
import { Observer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyObservable<T> {
  private observers: Observer<T>[] = [];

  public emit(value: T) {
    for (const observer of this.observers) {
      observer.next(value);
    }
  }

  public subscribe(observer: Observer<T>, value: T) {
    this.observers.push(observer)
    this.observers.forEach(o =>
      o.next(value)
    )
  }
}
