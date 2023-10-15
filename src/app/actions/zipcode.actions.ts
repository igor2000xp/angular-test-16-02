import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ZipcodeActions = createActionGroup({
  source: 'Zipcode',
  events: {
    '[Zipcoge]Get-Zipcode': emptyProps(),
    // '[Zipcoge]Get-by-ID-Zipcode': props<{ dataId: string }>(),
    '[Zipcoge]Create-Zipcode': props<{ zipcode: string }>(),
    '[Zipcoge]Update-Zipcode': props<{ newZipcode: string, oldZipcode: string }>(),
    '[Zipcoge]Delete-Zipcode': props<{ zipcode: string }>(),

    // '[Zipcoge] Add Zipcode Success': props<{ data: string }>(),
    // '[Zipcoge] Add Zipcodes Failure': props<{ error: unknown }>(),
  }
});
