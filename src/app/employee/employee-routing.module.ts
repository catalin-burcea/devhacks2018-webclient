import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';

export const routes: Routes = [
  {path: '', redirectTo:'list', pathMatch:'full'},
  {path: 'list', component: EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
