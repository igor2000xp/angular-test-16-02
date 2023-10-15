import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';

@NgModule({
  declarations: [AppComponent, ZipcodeEntryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    // isDevMode() ? StoreDevtoolsModule.instrument() : [],
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    // StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Number of states to retain
      logOnly: isDevMode() // Disable Redux DevTools in production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
