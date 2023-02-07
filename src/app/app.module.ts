import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTopNavBarComponent } from './navigation/first-top-nav-bar/first-top-nav-bar.component';
import { SecondTopNavBarComponent } from './navigation/second-top-nav-bar/second-top-nav-bar.component';
import { WelcomeImageComponent } from './welcome-image/welcome-image.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { BorderboxesComponent } from './borderboxes/borderboxes.component';
import { ProgramBoxesComponent } from './program-boxes/program-boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTopNavBarComponent,
    SecondTopNavBarComponent,
    WelcomeImageComponent,
    MissionStatementComponent,
    BorderboxesComponent,
    ProgramBoxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
