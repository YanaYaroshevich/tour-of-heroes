import {Injectable} from '@angular/core';
import {Hero} from '../models/hero';
import {HEROES} from '../mocks/mock-heroes';

@Injectable()
export class HeroService {
  private _heroes = HEROES;

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes(): Promise<Hero[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(this._heroes)));
      }, 2000);
    });
  }

  editHero(newHero: Hero): void {
    const heroRef = this.getHeroObjectById(newHero.id);
    if (heroRef) {
      heroRef.name = newHero.name;
    }
  }

  private getHeroObjectById(id: number): Hero {
    for (let i = 0; i < this._heroes.length; i++) {
      if (this._heroes[i].id === id) {
        return this._heroes[i];
      }
    }
    return null;
  }
}
