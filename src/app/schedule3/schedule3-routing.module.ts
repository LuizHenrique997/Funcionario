import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Schedule3Page } from './schedule3.page';

const routes: Routes = [
  {
    path: '',
    component: Schedule3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Schedule3PageRoutingModule {}
