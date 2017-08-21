import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

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

  onNameEdit(): void {
    const heroRef = this.getHeroObjectById(this.selectedHero.id);
    if (heroRef) {
      heroRef.name = this.selectedHero.name;
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
