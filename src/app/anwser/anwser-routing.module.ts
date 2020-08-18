import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnwserPage } from './anwser.page';

const routes: Routes = [
  {
    path: '',
    component: AnwserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnwserPageRoutingModule {}
