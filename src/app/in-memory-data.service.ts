import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Wolverine', image: 'assets/Wolverine.webp' },
      { id: 13, name: 'BlackPanther', image: 'assets/black-panther.webp' },
      { id: 14, name: 'Drax', image: 'assets/drax.webp' },
      { id: 15, name: 'Ragnar', image: 'assets/Ragnar.webp' },
      { id: 16, name: 'IronMan', image: 'assets/iron-man.webp', rivalId: 26 },
      { id: 17, name: 'SpiderMan', image: 'assets/spoder-man.webp', rivalId:25 },
      { id: 18, name: 'Thor', image: 'assets/thor.webp', rivalId: 24},
      { id: 19, name: 'StarLord', image: 'assets/star-lord.webp' },
      { id: 20, name: 'BatMan', image: 'assets/bat-man.webp' },
      { id: 21, name: 'SuperMan', image: 'assets/super-man.webp' },
      { id: 22, name: 'WonderWhoman', image: 'assets/wonder-whoman.webp' },
      { id: 23, name: 'BlackWidow', image: 'assets/black-widow.webp' },
      { id: 24, name: 'Loke', image: 'assets/loke.webp', rivalId: 18 },
      { id: 25, name: 'GreenGoblin', image: 'assets/greengoblin.webp', rivalId: 17},
      { id: 26, name: 'Mandarin', image: 'assets/Mandarin.webp', rivalId: 16}
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
