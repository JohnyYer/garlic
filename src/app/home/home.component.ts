import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dishService: DishService) { }

  slides: Dish[];

  slideConfig = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '480px',
    infinite: true,
    prevArrow: '<div class="slick-prev"><button type="button">Назад</button></div>',
    nextArrow: '<div class="slick-next"><button type="button">Вперед</button></div>',
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: '350px',
        }
      },
      {
        breakpoint: 1550,
        settings: {
          centerPadding: '300px',
        }
      },
      {
        breakpoint: 1420,
        settings: {
          centerPadding: '250px',
        }
      },
      {
        breakpoint: 1320,
        settings: {
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 1220,
        settings: {
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 1120,
        settings: {
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 1000,
        settings: {
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 820,
        settings: {
          centerMode: false,
        }
      }
    ]
  };

  getSpecialDishes(): void {
    this.dishService.getSpecialProposal().subscribe(specialDishes => this.slides = specialDishes);
  }

  ngOnInit() {
    this.getSpecialDishes();
  }

}
