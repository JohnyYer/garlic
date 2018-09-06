import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../dish.service';
import { Dish } from '../dish';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dishService: DishService
  ) { }

  getDish(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.dishService.getDish(name)
      .subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getDish();
  }

}
