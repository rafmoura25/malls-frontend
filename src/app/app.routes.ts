import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MallsComponent } from './components/malls/malls.component';
import { MallFormComponent } from './components/mall-form/mall-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'malls', pathMatch: 'full' },
  { path: 'malls', component: MallsComponent },
  { path: 'mall/new', component: MallFormComponent },
  { path: 'mall/edit/:id', component: MallFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
