import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { zipcodeReducer, ZipcodeState } from './zip-codes.reducer';


export interface State {
  zipcode: ZipcodeState;
}

export const reducers: ActionReducerMap<State> = {
  zipcode: zipcodeReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
