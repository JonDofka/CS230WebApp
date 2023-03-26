import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosmetologyComponent } from './Layouts/cosmetology/cosmetology.component';
import { EstheticsComponent } from './Layouts/esthetics/esthetics.component';
import { HairstylistComponent } from './Layouts/hairstylist/hairstylist.component';
import { HomepageComponent } from './Layouts/homepage/homepage.component';
import { MassageComponent } from './Layouts/massage/massage.component';
import { NailComponent } from './Layouts/nail/nail.component';

const routes: Routes = [
{
  path: '',
  component: HomepageComponent,
},

{
  path: 'cosmetology',
  component: CosmetologyComponent,
},
{
  path: 'esthetics',
  component: EstheticsComponent,
},
{
  path: 'hairstylist',
  component: HairstylistComponent,
},
{
  path: 'massage',
  component: MassageComponent,
},
{
  path: 'nail',
  component: NailComponent,
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
