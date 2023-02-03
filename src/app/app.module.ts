import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTopNavBarComponent } from './navigation/first-top-nav-bar/first-top-nav-bar.component';
import { SecondTopNavBarComponent } from './navigation/second-top-nav-bar/second-top-nav-bar.component';
import { WelcomeImageComponent } from './welcome-image/welcome-image.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTopNavBarComponent,
    SecondTopNavBarComponent,
    WelcomeImageComponent,
    MissionStatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
