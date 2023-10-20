import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { zipcodeReducer, ZipcodesState } from './zipcodes.reducer';
import { currentConditionalsReducer, CurrentConditionsState } from './current-conditions.reducer';


export interface State {
  zipcodes: ZipcodesState;
  currentConditionals: CurrentConditionsState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditionals: currentConditionalsReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
