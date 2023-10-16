import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ZipcodesActions = createActionGroup({
  source: 'Zipcodes',
  events: {
    '[ZipCodes] Zipcodess': emptyProps(),
    '[ZipCodes] Zipcodess Success': props<{ data: unknown }>(),
    '[ZipCodes] Zipcodess Failure': props<{ error: unknown }>(),
  }
});
