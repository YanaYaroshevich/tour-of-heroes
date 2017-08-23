import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../models/hero';
import {HeroService} from '../shared/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  } // possible to use HeroService as a constructor parameter

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(res => this.heroes = res, err => console.log(err));
  }

  goToDetail(): void {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = Object.assign({}, hero);
  }
}
