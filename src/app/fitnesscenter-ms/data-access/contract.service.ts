import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Contract } from '../entities/contract';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {}

  search(firstName:string, lastName:string, baseURL:string): Observable<Contract[]> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams()
      .set('firstName_like', firstName)
      .set('lastName_like', lastName);

    return this.http.get<Contract[]>(baseURL, { headers, params });
  }

  update(baseURL:string, contract:Contract): Observable<Contract> {
    const url = baseURL + '/' + contract.id;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.http.put<Contract>(url, contract, { headers });
  }

  create(baseURL:string, contract:Contract): Observable<Contract> {
    const url = baseURL;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.http.post<Contract>(url, contract, { headers });
  }


}
