import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Schedule5PageRoutingModule } from './schedule5-routing.module';

import { Schedule5Page } from './schedule5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Schedule5PageRoutingModule
  ],
  declarations: [Schedule5Page]
})
export class Schedule5PageModule {}
