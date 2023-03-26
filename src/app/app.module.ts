import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTopNavBarComponent } from './Navigation/first-top-nav-bar/first-top-nav-bar.component';
import { SecondTopNavBarComponent } from './Navigation/second-top-nav-bar/second-top-nav-bar.component';
import { WelcomeImageComponent } from './welcome-image/welcome-image.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { BorderboxesComponent } from './borderboxes/borderboxes.component';
import { ProgramBoxesComponent } from './program-boxes/program-boxes.component';
import { ApplicationSectionComponent } from './application-section/application-section.component';
import { BlackWhiteBrochureComponent } from './black-white-brochure/black-white-brochure.component';
import { GraduatedGirlsCarouselComponent } from './graduated-girls-carousel/graduated-girls-carousel.component';
import { QuotesCarouselComponent } from './quotes-carousel/quotes-carousel.component';
import { CardComponent } from './graduated-girls-carousel/card/card.component';
import { HomepageComponent } from './Layouts/homepage/homepage.component';
import { CosmetologyComponent } from './Layouts/cosmetology/cosmetology.component';
import { EstheticsComponent } from './Layouts/esthetics/esthetics.component';
import { HairstylistComponent } from './Layouts/hairstylist/hairstylist.component';
import { MassageComponent } from './Layouts/massage/massage.component';
import { NailComponent } from './Layouts/nail/nail.component';
import { IntroImageComponent } from './Layouts/cosmetology/CosmetologyComponents/intro-image/intro-image.component';
import { EstheticsintroComponent } from './Layouts/esthetics/EstheticsComponents/estheticsintro/estheticsintro.component';
import { HairIntroComponent } from './Layouts/hairstylist/HairstylistComponents/hair-intro/hair-intro.component';
import { MassageIntroComponent } from './Layouts/massage/MassageComponents/massage-intro/massage-intro.component';
import { NailIntroComponent } from './Layouts/nail/nailComponents/nail-intro/nail-intro.component';
import { CosmetologyDetailsComponent } from './Layouts/cosmetology/CosmetologyComponents/cosmetology-details/cosmetology-details.component';
import { FinancialAidComponent } from './Layouts/financial-aid/financial-aid.component';
import { EstheticsDetailsComponent } from './Layouts/esthetics/EstheticsComponents/esthetics-details/esthetics-details.component';
import { BlackBarComponent } from './footer/black-bar/black-bar.component';
import { EstheticsCardComponent } from './Layouts/esthetics/EstheticsComponents/esthetics-details/esthetics-card/esthetics-card.component';
import { HairDetailsComponent } from './Layouts/hairstylist/HairstylistComponents/hair-details/hair-details.component';
import { UserInfoComponent } from './Navigation/userinfo/user-info/user-info.component';


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
    CardComponent,
    HomepageComponent,
    CosmetologyComponent,
    EstheticsComponent,
    HairstylistComponent,
    MassageComponent,
    NailComponent,
    IntroImageComponent,
    EstheticsintroComponent,
    HairIntroComponent,
    MassageIntroComponent,
    NailIntroComponent,
    CosmetologyDetailsComponent,
    FinancialAidComponent,
    EstheticsDetailsComponent,
    BlackBarComponent,
    EstheticsCardComponent,
    HairDetailsComponent,
    UserInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
