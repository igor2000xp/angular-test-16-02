import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log('ngAfterContentInit');
  }
  title = 'angular-test-16-02';
  o: { id: number; name: string, d: { a: number[] } } = { id: 1, name: 'John', d: { a: [1, 2] } };

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    setTimeout(() => {
      this.o.id = 2;
      this.o.name = 'Jane';
    }, 2000)

    setTimeout(() => {
      this.o.id = 4;
      this.o.name = 'Alex';
    }, 4000);

    setTimeout(() => {
      this.o.d.a[0] = 45;
      // this.o.name = 'Bob';
    }, 4500)
  }

}
