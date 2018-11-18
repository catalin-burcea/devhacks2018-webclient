import { Injectable } from '@angular/core';
import { Company } from 'src/app/shared/entities/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Review } from 'src/app/shared/entities/Review';
import { Tag } from 'src/app/shared/entities/Tag';
import { User } from 'src/app/shared/entities/User';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl:string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public getCompanyList():Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + "companies");
  }

  public searchCompanies(companyName, location, tag):Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + "companies" + `?name=${companyName}&location=${location}&tag=${tag}`);
  }

  public getCompanyRecommendations(salary, training, interview, env, tag):Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + "companies/recommendations" + `?salary=${salary}&training=${training}&interview=${interview}&env=${env}&tag=${tag}`);
  }

  public getCompanyById(companyId):Observable<Company> {
    return this.http.get<Company>(this.baseUrl + `companies/${companyId}`);
  }

  public getReviewsByCompany(companyId):Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl + `companies/${companyId}/reviews`);
  }

  public getTagList():Observable<Tag[]> {
    return this.http.get<Tag[]>(this.baseUrl + `tags`);
  }

  public addReview(companyId, desc, rating, category): Observable<Review> {
    return this.http.post<Review>(this.baseUrl + `companies/${companyId}/reviews?description=${desc}&rating=${rating}&category=${category}`, null);
  }

  public login(username, password): Observable<User> {
    return this.http.post<User>(this.baseUrl + `login?username=${username}&password=${password}`, null);
  }

}
