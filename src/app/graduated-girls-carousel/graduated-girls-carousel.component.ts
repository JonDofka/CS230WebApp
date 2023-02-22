import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from './card/product.model';
import { mock_list } from './card/mock_list';

@Component({
  selector: 'app-graduated-girls-carousel',
  templateUrl: './graduated-girls-carousel.component.html',
  styleUrls: ['./graduated-girls-carousel.component.css']
})

export class GraduatedGirlsCarouselComponent{
  title = 'TutorialApp';
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }

}
