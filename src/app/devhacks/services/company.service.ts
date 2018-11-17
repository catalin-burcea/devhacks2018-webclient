import { Injectable } from '@angular/core';
import { Company } from 'src/app/shared/entities/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Review } from 'src/app/shared/entities/Review';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl:string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public getCompanyList():Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + "companies");
  }

  public getCompanyById(companyId):Observable<Company> {
    return this.http.get<Company>(this.baseUrl + `companies/${companyId}`);
  }

  public getReviewsByCompany(companyId):Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl + `companies/${companyId}/reviews`);
  }
}
