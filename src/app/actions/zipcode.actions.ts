import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ZipcodeActions = createActionGroup({
  source: 'Zipcode',
  events: {
    ZipGetAll: emptyProps(),
    ZipAdd: props<{ zipcode: string }>(),
    ZipDelete: props<{ zipcode: string }>(),
  }
});
