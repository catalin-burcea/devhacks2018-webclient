import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/pages/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  // { path: 'employees', component: EmployeeListComponent },
  { path: 'employees', loadChildren: './employee/employee.module#EmployeeModule'},
  { path: '**', redirectTo: 'employees'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
