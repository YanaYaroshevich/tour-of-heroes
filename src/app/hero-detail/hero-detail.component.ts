import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import {Hero} from '../models/hero';
import {HeroService} from '../shared/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  /*@Output() submitClicked = new EventEmitter<Hero>();*/ // was used for the communication with a parent

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private heroService: HeroService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  /*emitSubmit(): void { // was used for the communication with a parent, now setNewName func
    this.submitClicked.emit(this.hero);
  }*/

  setNewName(): void {
    this.heroService.editHero(this.hero);
    this.router.navigate(['/heroes']);

  }
}
