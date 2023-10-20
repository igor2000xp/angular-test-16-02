import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CurrentConditionsActions = createActionGroup({
  source: 'CurrentConditions',
  events: {
    AddCurrent: props<{ zipcode: string, condition: any }>(),
    AddCurrentFailure: props<{ zipcode: string, error: any }>(),
  }
});
