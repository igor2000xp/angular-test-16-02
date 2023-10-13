import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './app-comp.component.html',
  styleUrls: ['./app-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCompComponent implements OnChanges {
  @Input() o: { id: number; name: string, d: { a: number[] } } = { id: 0, name: '', d: { a: [0] } };
  id = 0;
  o2 = { id: 0, name: '000' };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.id = this.o.id;
  }

  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    if (this.id !== this.o.id) {
      this.id = this.o.id;
      this.cdr.detectChanges();
    }
  }

}
