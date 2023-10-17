import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers'
import { ZipcodeActions } from 'src/app/actions/zipcode.actions';

@Component({
  selector: 'app-add-zip',
  templateUrl: './add-zip.component.html',
  styleUrls: ['./add-zip.component.scss']
})
export class AddZipComponent implements OnInit {
  zipcodes: string[] = [];

  constructor(private store: Store<State>) { };

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.store.select((state) => state.zipcodes)
      .subscribe((zip) => this.zipcodes = zip.zipcodes);
  }

  addZip(zipcode: string) {
    this.store.dispatch(ZipcodeActions['[ZIP]Add-Zipcodes']({ payload: zipcode }));
  }
}
