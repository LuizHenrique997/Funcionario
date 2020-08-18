import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Schedule4Page } from './schedule4.page';

const routes: Routes = [
  {
    path: '',
    component: Schedule4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Schedule4PageRoutingModule {}
