import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from './card/product.model';
//import { mock_list } from './card/mock_list';
import { GirlsService } from './card/girls.service';

@Component({
  selector: 'app-graduated-girls-carousel',
  templateUrl: './graduated-girls-carousel.component.html',
  styleUrls: ['./graduated-girls-carousel.component.css']
  
})

export class GraduatedGirlsCarouselComponent implements OnInit{
  title = 'TutorialApp';
  students: ProductModel [] = [];

  constructor(private girlsservice:GirlsService){
    //for (var item of mock_list){
      //console.log(item);
      //this.students.push(item);
    //}
  }

  ngOnInit(): void {
    this.girlsservice.getGirls().subscribe((data: ProductModel []) =>{
      for (var x of data){
        console.log(x)
        this.students.push(x)
      }
    })
    
  }

}
