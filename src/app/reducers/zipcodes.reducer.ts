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
  on(ZipcodeActions.zipGetAll, (state) => {
    return { ...state };
  }),
  on(ZipcodeActions.zipAdd, (state, payload) => {
    return { ...state, zipcodes: [payload.zipcode, ...state.zipcodes] };
  }),
  on(ZipcodeActions.zipDelete, (state, payload) => {
    return { ...state, zipcodes: state.zipcodes.filter((item) => item !== payload.zipcode) }
  })
);

