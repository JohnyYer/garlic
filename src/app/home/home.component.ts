import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    { main: 'assets/img/main_dishes/pork/chelogach/img0015.jpg', secondary: 'assets/img/main_dishes/pork/chelogach/img0015.jpg'},
    { main: 'assets/img/first_dishes/morkovnyi_sup_s_bulgurom/img0013.jpg',
      secondary: 'assets/img/first_dishes/morkovnyi_sup_s_bulgurom/img0016.jpg'},
    { main: 'assets/img/salads/grecheskii/img0046.jpg', secondary: 'assets/img/salads/grecheskii/img0049.jpg'}
  ];

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

  ngOnInit() {
  }

}
