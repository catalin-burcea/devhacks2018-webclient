import { Injectable } from '@angular/core';
import { Company } from 'src/app/shared/entities/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Review } from 'src/app/shared/entities/Review';
import { Tag } from 'src/app/shared/entities/Tag';
import { User } from 'src/app/shared/entities/User';
import { Job } from 'src/app/shared/entities/Job';

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
  public getCompaniesByTag(tag):Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + `companies?tag=${tag}`);
  }
  public getReviewsByCompany(companyId):Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl + `companies/${companyId}/reviews`);
  }

  public getJobsByCompany(companyId):Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl + `companies/${companyId}/jobs`);
  }

  public getTagList():Observable<Tag[]> {
    return this.http.get<Tag[]>(this.baseUrl + `tags`);
  }

  public addReview(userId, companyId, desc, rating, category, subject): Observable<Review> {
    return this.http.post<Review>(this.baseUrl + `companies/${companyId}/reviews?userId=${userId}&description=${desc}&rating=${rating}&category=${category}&subject=${subject}`, null);
  }

  public login(username, password): Observable<User> {
    return this.http.post<User>(this.baseUrl + `login?username=${username}&password=${password}`, null);
  }

}
