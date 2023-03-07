import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-esthetics-card',
  templateUrl: './esthetics-card.component.html',
  styleUrls: ['./esthetics-card.component.css']
})
export class EstheticsCardComponent implements OnInit{
  @Input() imgAlt1: string;
  @Input() img1: string;
  
  @Input() imgAlt2: string;
  @Input() img2: string;

  @Input() imgAlt3: string;
  @Input() img3: string;

 

  constructor() {
    this.img1 = "No img found";
    this.imgAlt1 = "No description found";
    this.img2 = "No img found";
    this.imgAlt2 = "No description found";
    this.img3 = "No img found";
    this.imgAlt3 = "No description found";
  
  }

  ngOnInit(): void {
  }
}
