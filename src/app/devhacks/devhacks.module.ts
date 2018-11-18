import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { DevhacksRoutingModule } from './devhacks-routing.module';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [CompanyListComponent, CompanyInfoComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    DevhacksRoutingModule
  ]
})
export class DevhacksModule { }
