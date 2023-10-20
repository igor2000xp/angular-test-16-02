import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddZipComponent } from './component/add-zip/add-zip.component';
import { EffectsModule } from '@ngrx/effects';
import { CurrentConditionsEffects } from './effects/current-conditions.effects';
import { CurrentConditionsComponent } from './components/current-conditionals/current-conditionals.component';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AddZipComponent, CurrentConditionsComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    // isDevMode() ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: isDevMode(),
    }),
    // EffectsModule.forFeature([CurrentConditionsEffects])
    EffectsModule.forRoot([CurrentConditionsEffects]),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule { }
