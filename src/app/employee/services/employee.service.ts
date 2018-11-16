import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/shared/entities/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  baseUrl:string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
      
  }

  public getEmployeeList():Observable<Employee[]> {
    var params = new HttpParams();
    // params.append(AppConfig.AUTH_TOKEN_HEADER, this.authService.authToken);
    return this.http.get<Employee[]>(this.baseUrl + "employees");
        
  }

  public getEmployeesByRole(role):Observable<Employee[]> {
    var params = new HttpParams();
    return this.http.get<Employee[]>(this.baseUrl + `employees/role?role=${role}`);
        
  }

  // private handleResponse(res:Response){
  //     console.log(res);
  //     let body = res.json();
  //     return body || {};
  // }

  // private handleError(error) {
  //     console.error(error);
  //     return Observable.throw(error.json().error || 'Server error');
  // }

  private handleError2<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
