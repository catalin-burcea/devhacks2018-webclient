import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Company } from 'src/app/shared/entities/Company';
import { CompanyService } from '../../services/company.service';
import { Tag } from 'src/app/shared/entities/Tag';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companyList: Company[];
  public tags: Tag[];
  public selectedTag;
  public selectedCompanyName = "";
  public selectedLocation = "";
  public selectedSalaryRange = 1;
  public selectedTrainingRange = 1;
  public selectedInterviewRange = 1;
  public selectedEnvRange = 1;
  public maxRatingValue:number = 10;

  @ViewChild('closeBtn') closeBtn: ElementRef;
  
  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.getCompanyList();
    this.getTagList();
  }

  private getCompanyList() {
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

  public searchCompanies() {
    this.companyService.searchCompanies(this.selectedCompanyName, this.selectedLocation, this.getSelectedTagName())
      .subscribe(
        data => {
          console.log('search company-list', data);
          this.companyList = data;
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  private getTagList() {
    this.companyService.getTagList()
      .subscribe(
        data => {
          console.log('tag-list', data);
          this.tags = data;
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  getSelectedTagName(){
    let selectedTagName = "";
    for(let i = 0; i < this.tags.length; i++){
      if(this.tags[i].id == this.selectedTag){
        selectedTagName = this.tags[i].name;
        break;
      }
    }
    return selectedTagName;
  }

  public getCompanyRecommendations() {
    

    this.companyService.getCompanyRecommendations(this.selectedSalaryRange, this.selectedTrainingRange, this.selectedInterviewRange, this.selectedEnvRange, this.getSelectedTagName())
      .subscribe(
        data => {
          console.log('company-recommendations-list', data);
          this.companyList = data;
          this.closeBtn.nativeElement.click();
        },
        error => {
          console.log("Error", error);
        }
      );
  }
}
