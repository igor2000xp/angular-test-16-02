import { createReducer, on } from '@ngrx/store';
import { ZipcodesActions } from '../actions/zipcodes.actions';

export const zipCodeFeatureKey = 'zipCode';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

