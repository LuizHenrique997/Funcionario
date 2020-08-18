import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Schedule3PageRoutingModule } from './schedule3-routing.module';

import { Schedule3Page } from './schedule3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Schedule3PageRoutingModule
  ],
  declarations: [Schedule3Page]
})
export class Schedule3PageModule {}
