import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { DevhacksRoutingModule } from './devhacks-routing.module';

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    DevhacksRoutingModule
  ]
})
export class DevhacksModule { }
