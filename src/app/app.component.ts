import { Component, NgZone } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   title = 'angular-test-16-02';
// }

@Component({
  selector: 'app-root',
  template: `
      <h3>
          Change detection is triggered at:
          <span [textContent]="time | date:'hh:mm:ss:SSS'"></span>
      </h3>
      <button class="btn btn-primary" (click)="0">Trigger Change Detection</button>
      <p>Examle is here:</p>
      <a href="https://stackblitz.com/edit/angular-c5sr8u?file=src%2Fapp%2Fapp.component.ts">stackblitz</a>
  `
})
export class AppComponent {
  _time;
  get time() {
    return this._time;
  }

  constructor(zone: NgZone) {
    this._time = Date.now();

    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now()
      }, 1);
    });
  }
}