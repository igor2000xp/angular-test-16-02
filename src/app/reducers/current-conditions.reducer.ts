import { createReducer, on } from '@ngrx/store';
import { CurrentConditionsActions } from '../actions/current-conditions.actions';

export const currentConditionsFeatureKey = 'currentConditions';

export interface CurrentConditionsState {
  currentConditions: Map<string, any>;
}

export const initialState: CurrentConditionsState = {
  currentConditions: new Map<string, any>(),
};

export const currentConditionalsReducer = createReducer(
  initialState,
  on(CurrentConditionsActions.addCurrent, (state, payload) => {
    const cc = new Map(state.currentConditions);
    cc.set(payload.zipcode, payload.condition);
    return { ...state, currentConditions: cc };
  }),
  on(CurrentConditionsActions.addCurrentFailure, (state, payload) => {
    console.log(payload.error.toString());
    return { ...state };
  }),
);

