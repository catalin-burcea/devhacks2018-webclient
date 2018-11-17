import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './pages/company-list/company-list.component';

export const routes: Routes = [
  { path: '', redirectTo:'list', pathMatch:'full' },
  { path: 'list', component: CompanyListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevhacksRoutingModule { }
