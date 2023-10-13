// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   title = 'angular-test-16-02';
// }

//our root app component
import { Component, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Input, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'a-comp',
  template: `<h2>The name is: {{o.name}} </h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent {
  @Input() o: { id: any; name: any } = { id: 0, name: '' };
  id: any;

  constructor(private cd: ChangeDetectorRef) { }

  ngDoCheck() {
    if (this.id !== this.o.id) {
      this.cd.markForCheck();
      this.id = this.o.id;
    }
  }
}

@Component({
  selector: 'app-root',
  template: `
    <h4>Hello {{name}}</h4>
    <a-comp [o]="o"></a-comp>
  `,
})
export class App {
  name = `Angular! v${VERSION.full}`;
  o = { id: 1, name: 'John' };

  ngOnInit() {
    setTimeout(() => {
      this.o.id = 2;
      this.o.name = 'Jane';
    }, 2000);
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [App, AComponent],
  bootstrap: [App]
})
export class AppModule { }