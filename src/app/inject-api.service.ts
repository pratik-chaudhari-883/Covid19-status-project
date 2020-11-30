import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InjectApiService {

  constructor(private http:HttpClient) { }

  

  getData(): Observable<any>{
    let url="https://api.covid19api.com/summary";
    return this.http.get<any>(url);
  }
  // public getProducts(): Observable<Product> {
  //   return this.http.get<Product>(`api/products/v1/`);
  // }
  
  getDynamicData(currentval): Observable<any>{
    let url1="https://covid19.mathdro.id/api/countries/"+currentval;
    return this.http.get<any>(url1);
  }
}
