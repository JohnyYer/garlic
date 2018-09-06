import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { DISHES } from './mock-dishes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(name: string): Observable<Dish> {
    return of(DISHES.find(dish => dish.name === name));
  }

  getSpecialProposal(): Observable<Dish[]> {
    return of(DISHES.filter(dish => dish.isSpecial));
  }
}
