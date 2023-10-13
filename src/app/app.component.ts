import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
