import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';


@Component({
  selector: 'app-foco',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './foco.component.html',
  standalone: true,
  styleUrl: './foco.component.scss'
})
export class FocoComponent {
  selectedPage: string = 'Home';
  navLink: Array<string> = ["Home", "Menu", "Service", "Shop"];
  colors: Array<string> = ["#fb8600", "#e0ffc2", "#fee1ef", "#fde6ce"];

  foodsSwiperList: Array<any> = [
    {
      imagePath: '/assets/images/sandwich.png',
      title: 'Cake',
      price: 5.99,
      bgColor: this.getColors()
    },
    {
      imagePath: '/assets/images/burger.png',
      title: 'Burger',
      price: 5.99,
      bgColor: this.getColors()
    },
    {
      imagePath: '/assets/images/donut.png',
      title: 'Donut',
      price: 5.99,
      bgColor: this.getColors()
    },
    {
      imagePath: '/assets/images/burger.png',
      title: 'Burger',
      price: 5.99,
      bgColor: this.getColors()
    },
    {
      imagePath: '/assets/images/donut.png',
      title: 'Donut',
      price: 5.99,
      bgColor: this.getColors()
    },
    {
      imagePath: '/assets/images/burger.png',
      title: 'Burger',
      price: 5.99,
      bgColor: this.getColors()
    },
    {
      imagePath: '/assets/images/donut.png',
      title: 'Donut',
      price: 5.99,
      bgColor: this.getColors()
    },{
      imagePath: '/assets/images/sandwich.png',
      title: 'Cake',
      price: 5.99,
      bgColor: this.getColors()
    },
    {
      imagePath: '/assets/images/burger.png',
      title: 'Burger',
      price: 5.99,
      bgColor: this.getColors()
    },
    {
      imagePath: '/assets/images/donut.png',
      title: 'Donut',
      price: 5.99,
      bgColor: this.getColors()
    },
  ];

  productCount:number=1;

  @ViewChild('swiperInstance') swiperInstance: any;

  changePage(page: string) {
    this.selectedPage = page;
  }

  getColors(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  swipeNext() {
    this.swiperInstance.nativeElement.swiper.slidesEl.swiper.slideNext();
  }

  swipePrev(){
    this.swiperInstance.nativeElement.swiper.slidesEl.swiper.slidePrev();
  }

  increaseProductCount(){
    this.productCount++;
  }

  decreaseProductCount(){
    if(this.productCount>1){
      this.productCount--;
    }
  }

}
