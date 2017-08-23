import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './shared/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'heroes',
      component: HeroesComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: 'hero/:id',
      component: HeroDetailComponent
    }, {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }])
  ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule {
}
