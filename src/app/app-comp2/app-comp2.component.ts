import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './app-comp2.component.html',
  styleUrls: ['./app-comp2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComp2Component implements DoCheck, OnInit {
  ooo = 1;
  @Input() o2 = { id: 0, name: "" };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.ooo = this.o2.id;
  }

  ngDoCheck(): void {
    this.ooo++;
    // throw new Error('Method not implemented.');
    if (this.ooo !== this.o2.id) {
      console.log(this.ooo);
      this.cdr.markForCheck();
    }
  }



}
