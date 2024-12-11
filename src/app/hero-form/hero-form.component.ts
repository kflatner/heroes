import { Component } from '@angular/core';
import { Hero } from '../hero';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  animations: [
    trigger('rollDown', [
      state('hidden', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('hidden <=> visible', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  isFormVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
    this.submitted = false;
  }
}
