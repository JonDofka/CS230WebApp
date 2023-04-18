import { Component, OnInit } from '@angular/core';
import { GirlsService } from '../../card/girls.service';
import { ProductModel } from '../../card/product.model';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {
  constructor(private ps:GirlsService) { }

  ngOnInit(): void {
  }

  addItem(product:ProductModel){
    console.log("You Clicked the button");
    console.log(product);
    this.ps.addProduct(product)
  }
}
