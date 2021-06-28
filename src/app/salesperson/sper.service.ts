import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salesperson } from './sper.class';

@Injectable({
  providedIn: 'root'
})
export class SperService {

  baseurl: string = "http://localhost:5000/api/salespersons";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Salesperson[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Salesperson[]>;
  }
  get(id: number): Observable<Salesperson> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Salesperson>;
  }
  create(sper: Salesperson): Observable<Salesperson> {
    return this.http.post(`${this.baseurl}`, sper) as Observable<Salesperson>;
  }
  change(sper: Salesperson): Observable<any> {
    return this.http.put(`${this.baseurl}/${sper.id}`, Salesperson) as Observable<any>;
  }
  remove(sper: Salesperson): Observable<Salesperson> {
    return this.http.delete(`${this.baseurl}/${sper.id}`) as Observable<Salesperson>;
  }
}
