import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherService } from '../weather.service';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { CurrentConditionsActions } from '../actions/current-conditions.actions';
import { ZipcodeActions } from '../actions/zipcode.actions';



@Injectable()
export class CurrentConditionsEffects {
  LoadCurrentConditions$: Observable<any> = this.actions$.pipe(
    ofType(ZipcodeActions.zipAdd),
    mergeMap(action =>
      this.weaterService.loadCurrentConditions(action.zipcode).pipe(
        map((data) => CurrentConditionsActions.addCurrent({ zipcode: action.zipcode, condition: data })),
        catchError((err) => of(CurrentConditionsActions.addCurrentFailure({ zipcode: action.type, error: err })))
      )
    ),
  )


  constructor(
    private actions$: Actions,
    private weaterService: WeatherService,
  ) { }
}
