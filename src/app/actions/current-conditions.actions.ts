import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CurrentConditionsActions = createActionGroup({
  source: 'CurrentConditions',
  events: {
    // '[CurConditions]Get-CurrentConditions': props()<{zipcode: string, }>(),
    '[CurConditions]Get-CurrentConditions': props<{ zipcode: string, condition: any }>(),
    '[CurConditions]Get-CurrentConditions-Failure': props<{ zipcode: string, error: any }>(),
  }
});
