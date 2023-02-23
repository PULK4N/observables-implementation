import { Observer } from "rxjs";


class Observable<T> {
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
