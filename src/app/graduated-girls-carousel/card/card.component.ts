import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() girlName: string;
  @Input() img: string;

  constructor() {
    this.img = "No img found";
    this.girlName = "No description found";
  }

  ngOnInit(): void {
  }
}
