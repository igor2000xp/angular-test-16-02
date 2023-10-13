import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCompComponent } from './app-comp/app-comp.component';
import { AppComp2Component } from './app-comp2/app-comp2.component';

@NgModule({
  declarations: [AppComponent, AppCompComponent, AppComp2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
