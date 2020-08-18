import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Schedule1Page } from './schedule1.page';

const routes: Routes = [
  {
    path: '',
    component: Schedule1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Schedule1PageRoutingModule {}
