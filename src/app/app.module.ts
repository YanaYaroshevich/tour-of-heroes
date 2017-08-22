import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent, HeroDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
