import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Schedule4PageRoutingModule } from './schedule4-routing.module';

import { Schedule4Page } from './schedule4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Schedule4PageRoutingModule
  ],
  declarations: [Schedule4Page]
})
export class Schedule4PageModule {}
