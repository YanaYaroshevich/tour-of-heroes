import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Hero} from '../models/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() submitClicked = new EventEmitter<Hero>();

  emitSubmit(): void {
    this.submitClicked.emit(this.hero);
  }
}
