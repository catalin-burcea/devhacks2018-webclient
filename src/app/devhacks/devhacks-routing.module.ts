import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';

export const routes: Routes = [
  { path: '', redirectTo:'list', pathMatch:'full' },
  { path: 'list', component: CompanyListComponent },
  { path: 'details/:id', component: CompanyInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevhacksRoutingModule { }
