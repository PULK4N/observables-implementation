import { Component } from '@angular/core';
import { MyObservable } from './models/my-observable';
import { Observer } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observables-project';

  constructor() {
    this.CreateAndSubscribeToObservable()
  }
  CreateAndSubscribeToObservable() {
    const obv$ = new MyObservable<number>();

    const myObserver: Observer<number> = {
      next: (value) => console.log(`Received value: ${value}`),
      error: (err) => console.error(`Error occurred: ${err}`),
      complete: () => console.log('Observable completed'),
    };
    obv$.subscribe(myObserver, 10)
  }
}
