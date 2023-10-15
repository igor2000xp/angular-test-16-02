import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ZipcodeActions } from '../actions/zipcode.actions';


@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  zipcodes: string[] = [];

  constructor(private store: Store<State>) {
    store.select(state => state.zipcode)
      .subscribe(zips => this.zipcodes = zips.Zipcodes);
  }

  addLocation(zipcode: string) {
    this.store.dispatch(ZipcodeActions['[Zipcoge]Create-Zipcode']({ zipcode }));
  }

}
