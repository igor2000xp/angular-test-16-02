import { createReducer, on } from '@ngrx/store';
import { ZipcodeActions } from '../actions/zipcode.actions';

export const zipcodesFeatureKey = 'zipcodes';

export interface ZipcodesState {
  zipcodes: string[];
}

export const initialState: ZipcodesState = {
  zipcodes: [],
};

export const zipcodeReducer = createReducer(
  initialState,
  on(ZipcodeActions['[ZIP]Get-all-Zipcodes'], (state) => {
    return { ...state };
  }),
  on(ZipcodeActions['[ZIP]Add-Zipcodes'], (state, payload) => {
    return { ...state, zipcodes: [payload.payload, ...state.zipcodes] };
  }),
  on(ZipcodeActions['[ZIP]Delete-Zipcodes'], (state, payload) => {
    return { ...state, zipcodes: state.zipcodes.filter((item) => item !== payload.payload) }
  })
);

