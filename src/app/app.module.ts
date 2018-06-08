import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlateSvgComponent } from './plate-svg/plate-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    PlateSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
