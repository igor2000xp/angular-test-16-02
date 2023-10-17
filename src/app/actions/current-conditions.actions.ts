import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CurrentConditionsActions = createActionGroup({
  source: 'CurrentConditions',
  events: {
    // '[CurConditions]Get-all-CurrentConditions': emptyProps(),
    // AddAll: emptyProps(),
    // '[CurConditions]Get-CurrentConditions': props<{ zipcode: string, condition: any }>(),
    AddCurrent: props<{ zipcode: string, condition: any }>(),
    // '[CurConditions]Get-CurrentConditions-Failure': props<{ zipcode: string, error: any }>(),
    AddCurrentFailure: props<{ zipcode: string, error: any }>(),
    // AddCurrent: props<{zipcode: string, condition: any}>()
  }
});

// export const curConditionsGetAll = CurrentConditionsActions['[CurConditions]Get-all-CurrentConditions'];
// export const curConditionsGetCurrent = CurrentConditionsActions['[CurConditions]Get-CurrentConditions'];
// export const curConditionsGetAllFailure = CurrentConditionsActions['[CurConditions]Get-CurrentConditions-Failure'];

