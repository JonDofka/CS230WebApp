import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  myInfo: UserInfo | undefined;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    console.log("Sending a get request to the server");
    this.getUserInfo();
    console.log("Registering UserInfo to Subscriber");
    this.showUserInfo();

  }

  getUserInfo(){
    return this.http.get<UserInfo>("https://beautycollege-360c1-default-rtdb.firebaseio.com/my-info.json");
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data)
      this.myInfo = data;
    });
  }

}
