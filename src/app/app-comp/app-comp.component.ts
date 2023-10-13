import { ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './app-comp.component.html',
  styleUrls: ['./app-comp.component.scss']
})
export class AppCompComponent implements DoCheck, OnChanges {
  @Input() o: { id: number; name: string } = { id: 0, name: '' };
  id = 0;

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
