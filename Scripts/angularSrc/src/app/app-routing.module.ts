import { NgModule } from '@angular/core';
import { pageListComponent } from './components/page-list/page-list.component';
import { pageHandlerComponent } from './components/page-handler/page-handler.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: pageListComponent },
  { path: 'page', component: pageHandlerComponent },
  { path: 'page/:id', component: pageHandlerComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
