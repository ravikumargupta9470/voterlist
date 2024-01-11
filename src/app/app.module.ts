import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EligibleComponent } from './eligible/eligible.component';
import { NoteligibleComponent } from './noteligible/noteligible.component';

@NgModule({
  declarations: [
    AppComponent,
    EligibleComponent,
    NoteligibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
