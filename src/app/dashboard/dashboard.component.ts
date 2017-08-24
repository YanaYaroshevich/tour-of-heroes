import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../models/hero';
import {HeroService} from '../shared/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService,
              private router: Router) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  goToDetail(id: number): void {
    this.router.navigate(['/hero', id]);
  }
}
