import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Benjamin' },
      { id: 12, name: 'Nicolas' },
      { id: 13, name: 'Vianney' },
      { id: 14, name: 'Hugo' },
      { id: 15, name: 'Clément' },
      { id: 16, name: 'Wilfred' },
      { id: 17, name: 'Tanguy' },
      { id: 18, name: 'Edouard' },
      { id: 19, name: 'Léo' },
      { id: 20, name: 'Adrien' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
