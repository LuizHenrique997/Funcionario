import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Schedule1PageRoutingModule } from './schedule1-routing.module';

import { Schedule1Page } from './schedule1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Schedule1PageRoutingModule
  ],
  declarations: [Schedule1Page]
})
export class Schedule1PageModule {}
