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

  onMenuTypeSelect(item: MenuType): void {
    this.selectedMenuType = item;
    this.filterMenu();
  }

  filterMenu(): void {
    this.dishes = this.dishService.getDishes().filter(
      dish => dish.type === this.selectedMenuType.state);
  }

  getDishes(): void {
    this.dishes = this.dishService.getDishes();
  }

  openMenuTypes(): void {
    this.openMobileMenu = !this.openMobileMenu;
  }

  ngOnInit() {
    this.getDishes();
    this.filterMenu();
  }

}
