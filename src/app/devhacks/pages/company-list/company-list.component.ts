import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/entities/Company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companyList: Company[];

  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  private getCompanies() {
    this.companyService.getCompanyList()
      .subscribe(
        data => {
          console.log('company-list', data);
          this.companyList = data;
        },
        error => {
          console.log("Error", error);
        }
      );
  }

}
