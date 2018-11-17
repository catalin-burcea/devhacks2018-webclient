import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { DevhacksRoutingModule } from './devhacks-routing.module';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompanyListComponent, CompanyInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    DevhacksRoutingModule
  ]
})
export class DevhacksModule { }
