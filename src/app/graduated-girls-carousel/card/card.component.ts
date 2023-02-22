import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() girlName1: string;
  @Input() img1: string;
  
  @Input() girlName2: string;
  @Input() img2: string;

  @Input() girlName3: string;
  @Input() img3: string;

  @Input() girlName4: string;
  @Input() img4: string;

  constructor() {
    this.img1 = "No img found";
    this.girlName1 = "No description found";
    this.img2 = "No img found";
    this.girlName2 = "No description found";
    this.img3 = "No img found";
    this.girlName3 = "No description found";
    this.img4 = "No img found";
    this.girlName4 = "No description found";

  }

  ngOnInit(): void {
  }
}
