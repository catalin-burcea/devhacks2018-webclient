import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  public companyId;
  public company: Company;
  public reviews: Review[];
  public maxRatingValue = 5;

  public nrOfSalaries = 0;
  public nrOfTrainings = 0;
  public nrOfInterviews = 0;
  public nrOfEnvironments = 0;

  public salariesSum = 0;
  public trainingsSum = 0;
  public interviewsSum = 0;
  public environmentsSum = 0;

  public selectedSalaryRange: 0;

  public reviewDesc;
  public reviewRating;
  public reviewSubject;

  public trainingDesc;
  public trainingRating;
  public trainingSubject;
  user;

  @ViewChild('closeBtnSalary') closeBtnSalary: ElementRef;
  @ViewChild('closeBtnTraining') closeBtnTraining: ElementRef;


  constructor(private companyService:CompanyService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.companyId = +params['id'];
      this.getCompanyById(this.companyId);
      this.getReviewsByCompany(this.companyId);
      this.user = JSON.parse(window.localStorage.getItem('user'));

    });
    
  }

  public addSalary() {
    this.companyService.addReview(this.user.id, this.companyId, this.reviewDesc, this.reviewRating, "Salaries", this.reviewSubject)
      .subscribe(
        data => {
          console.log('added review', data);
          this.reviews.push(data);
          this.nrOfSalaries++;
          this.salariesSum += data.rating;
          this.closeBtnSalary.nativeElement.click();
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  public addTraining() {
    this.companyService.addReview(this.user.id, this.companyId, this.trainingDesc, this.trainingRating, "Trainings", this.trainingSubject)
      .subscribe(
        data => {
          console.log('added training', data);
          this.reviews.push(data);
          this.nrOfTrainings++;
          this.trainingsSum += data.rating;
          this.closeBtnTraining.nativeElement.click();
        },
        error => {
          console.log("Error", error);
        }
      );
    
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
          this.computeAverages(data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  private computeAverages(data) {
    for(let i = 0; i < data.length; i++){
      switch(data[i].category){
        case 'Salaries': {
          this.salariesSum += data[i].rating;
          this.nrOfSalaries++;
          break;
        }
        case 'Trainings': {
          this.trainingsSum += data[i].rating;
          this.nrOfTrainings++;
          break;
        }
        case 'Interviews': {
          this.interviewsSum += data[i].rating;
          this.nrOfInterviews++;
          break;
        }
        case 'Environment': {
          this.environmentsSum += data[i].rating;
          this.nrOfEnvironments++;
          break;
        }
      }
    }
  }

}
