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
import { ApplicationSectionComponent } from './application-section/application-section.component';
import { BlackWhiteBrochureComponent } from './black-white-brochure/black-white-brochure.component';
import { GraduatedGirlsCarouselComponent } from './graduated-girls-carousel/graduated-girls-carousel.component';
import { QuotesCarouselComponent } from './quotes-carousel/quotes-carousel.component';
import { CardComponent } from './graduated-girls-carousel/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTopNavBarComponent,
    SecondTopNavBarComponent,
    WelcomeImageComponent,
    MissionStatementComponent,
    BorderboxesComponent,
    ProgramBoxesComponent,
    ApplicationSectionComponent,
    BlackWhiteBrochureComponent,
    GraduatedGirlsCarouselComponent,
    QuotesCarouselComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
