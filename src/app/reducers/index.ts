import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { zipcodeReducer, ZipcodesState } from './zipcodes.reducer';


export interface State {
  zipcodes: ZipcodesState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
