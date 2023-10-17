import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ZipcodeActions = createActionGroup({
  source: 'Zipcode',
  events: {
    '[ZIP]Get-all-Zipcodes': emptyProps(),
    '[ZIP]Add-Zipcodes': props<{ payload: string }>(),
    '[ZIP]Delete-Zipcodes': props<{ payload: string }>(),
  }
});
