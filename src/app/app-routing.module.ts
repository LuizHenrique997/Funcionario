import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'doubts',
    loadChildren: () => import('./doubts/doubts.module').then( m => m.DoubtsPageModule)
  },
  {
    path: 'anwser',
    loadChildren: () => import('./anwser/anwser.module').then( m => m.AnwserPageModule)
  },
  {
    path: 'historic',
    loadChildren: () => import('./historic/historic.module').then( m => m.HistoricPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'schedule1',
    loadChildren: () => import('./schedule1/schedule1.module').then( m => m.Schedule1PageModule)
  },
  {
    path: 'schedule2',
    loadChildren: () => import('./schedule2/schedule2.module').then( m => m.Schedule2PageModule)
  },
  {
    path: 'schedule3',
    loadChildren: () => import('./schedule3/schedule3.module').then( m => m.Schedule3PageModule)
  },
  {
    path: 'schedule4',
    loadChildren: () => import('./schedule4/schedule4.module').then( m => m.Schedule4PageModule)
  },
  {
    path: 'schedule5',
    loadChildren: () => import('./schedule5/schedule5.module').then( m => m.Schedule5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
