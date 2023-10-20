// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-current-conditionals',
//   templateUrl: './current-conditionals.component.html',
//   styleUrls: ['./current-conditionals.component.scss']
// })
// export class CurrentConditionalsComponent {

// }


import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { WeatherService } from '../../weather.service';
import { CurrentConditionsActions } from 'src/app/actions/current-conditions.actions';
// import { RemoveZipcode } from '../actions/zipcode.actions';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditionals.component.html',
  styleUrls: ['./current-conditionals.component.scss']
})
export class CurrentConditionsComponent {

  zipcodes: Array<string> = [];

  currentConditions: Map<string, any> = new Map();

  constructor(private store: Store<State>, public weatherService: WeatherService) {
    store.select(state => state.zipcodes)
      .subscribe(zips => this.zipcodes = zips.zipcodes);

    store.select(state => state.currentConditionals)
      .subscribe(conditions => this.currentConditions = conditions.currentConditions);
  }

  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }

  // removeZip(zip: string) {
  //   // this.store.dispatch(new RemoveZipcode(zip));
  //   this.store.dispatch(CurrentConditionsActions.)
  // }
}
