import {Component} from '@angular/core';
import {Hero} from './models/hero';

const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes!';
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = Object.assign({}, hero);
  }

  onNameEdit(editedHero: Hero): void {
    const heroRef = this.getHeroObjectById(editedHero.id);
    if (heroRef) {
      heroRef.name = editedHero.name;
    }
  }

  private getHeroObjectById(id: number): Hero {
    for (let i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i].id === id) {
        return this.heroes[i];
      }
    }
    return null;
  }
}
