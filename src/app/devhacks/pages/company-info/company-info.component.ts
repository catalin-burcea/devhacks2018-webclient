import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from 'src/app/shared/entities/Company';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/shared/entities/Review';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  public company: Company;
  public reviews: Review[];
  public maxRatingValue = 5;

  constructor(private companyService:CompanyService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.getCompanyById(id);
      this.getReviewsByCompany(id);
    });
    
  }

  private getCompanyById(companyId) {
    this.companyService.getCompanyById(companyId)
      .subscribe(
        data => {
          console.log('company', data);
          this.company = data;
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  private getReviewsByCompany(companyId) {
    this.companyService.getReviewsByCompany(companyId)
      .subscribe(
        data => {
          console.log('reviews', data);
          this.reviews = data;
        },
        error => {
          console.log("Error", error);
        }
      );
  }

}
