import { createReducer, on } from '@ngrx/store';
import { ZipcodeActions } from '../actions/zipcode.actions';

export const zipCodesFeatureKey = 'zipCodes';

export interface ZipcodeState {
  Zipcodes: string[];
}

export const initialState: ZipcodeState = {
  Zipcodes: [],

};

export const zipcodeReducer = createReducer(
  initialState,
  on(ZipcodeActions['[Zipcoge]Get-Zipcode'], (state: ZipcodeState) => {
    console.log('ZipcodeActions[Zipcoge]GetZipcode');
    return { ...state };
  }),
  // on(ZipcodeActions['[Zipcoge]Get-by-ID-Zipcode'], (state, action) => {
  //   console.log('ZipcodeActions[Zipcode] Get by ID Zipcode');
  //   return { ...state };
  // }),
  on(ZipcodeActions['[Zipcoge]Create-Zipcode'], (state: ZipcodeState, payload) => {
    console.log('ZipcodeActions[Zipcode] Create Zipcode');
    return { ...state, Zipcodes: [payload.zipcode, ...state.Zipcodes] };
  }),
  on(ZipcodeActions['[Zipcoge]Update-Zipcode'], (state, payload) => {
    return { ...state, Zipcodes: [payload.newZipcode, ...state.Zipcodes.filter((item) => item !== payload.oldZipcode)] };
  }),
  on(ZipcodeActions['[Zipcoge]Delete-Zipcode'], (state, payload) => {
    return { ...state, Zipcodes: [...state.Zipcodes.filter((item) => item !== payload.zipcode)] }
  }),
)
