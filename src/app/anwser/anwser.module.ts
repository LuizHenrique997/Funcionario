import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnwserPageRoutingModule } from './anwser-routing.module';

import { AnwserPage } from './anwser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnwserPageRoutingModule
  ],
  declarations: [AnwserPage]
})
export class AnwserPageModule {}
