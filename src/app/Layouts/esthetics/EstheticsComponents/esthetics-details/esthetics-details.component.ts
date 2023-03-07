import { Component } from '@angular/core';
import { estheticsImgModel } from './esthetics-card/estheticsImg.model';
import { mock_list2 } from './esthetics-card/mock_list2';

@Component({
  selector: 'app-esthetics-details',
  templateUrl: './esthetics-details.component.html',
  styleUrls: ['./esthetics-details.component.css']
})
export class EstheticsDetailsComponent {
  title = 'TutorialApp';
  images: estheticsImgModel [] = [];

  constructor(){
    for (var item of mock_list2){
      console.log(item);
      this.images.push(item);
    }
  }
}
