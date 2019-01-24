import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private baseUrl = 'http://localhost:8080/api/partners';

  constructor(private http: HttpClient) { }

  getPartner(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPartner(partners: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, partners);
  }

  updatePartner(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deletePartner(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPartnersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPartnersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
