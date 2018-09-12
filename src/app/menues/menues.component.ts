import { Component, OnInit } from '@angular/core';
import { MenuType } from '../menuType';
import { MENU_TYPES } from '../mock-menu-types';
import { DishService} from '../dish.service';
import { Dish } from '../dish';

@Component({
  selector: 'app-menues',
  templateUrl: './menues.component.html',
  styleUrls: ['./menues.component.scss']
})
export class MenuesComponent implements OnInit {

  constructor(private dishService: DishService) { }

  menuTypes = MENU_TYPES;
  dishes: Dish[];
  selectedMenuType = MENU_TYPES[0];
  openMobileMenu = false;
  week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ'];
  currentDay: string;

  onMenuTypeSelect(item: MenuType): void {
    this.openMobileMenu = false;
    this.selectedMenuType = item;
    this.getDishes();
  }

  getDishes(): void {
    this.dishService.getDishes(this.selectedMenuType.state, this.currentDay)
      .subscribe(dishes => this.dishes = dishes);
  }

  openMenuTypes(): void {
    this.openMobileMenu = !this.openMobileMenu;
  }

  getCurrentDay(): void {
    const today = new Date().getDay() - 1;
    this.currentDay = this.week[today] ? this.week[today] : this.week[0];
  }

  selectMenuByDay(day): void {
    this.currentDay = day;
    this.getDishes();
  }

  ngOnInit() {
    this.getCurrentDay();
    this.getDishes();
  }

}
