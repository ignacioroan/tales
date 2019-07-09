import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { TaleListComponent } from './components/tale-list/tale-list.component';
import { TaleComponent } from './components/tale/tale.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lista-de-relatos',
    pathMatch: 'full'
  },
  {
    path: 'lista-de-relatos',
    component: TaleListComponent
  },
  {
    path: 'relato/:id',
    component: TaleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
