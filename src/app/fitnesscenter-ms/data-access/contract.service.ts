import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Contract } from '../entities/contract';
import { ContractSearchComponent } from '../feature/contract-search/contract-search.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private http: HttpClient) { }

  search(
    firstName: string,
    lastName: string,
    baseURL: string
  ): Observable<Contract[]> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams()
      .set('firstName_like', firstName)
      .set('lastName_like', lastName);

    return this.http.get<Contract[]>(baseURL, { headers, params });
  }

  update(baseURL: string, contract: Contract): Observable<Contract> {
    const url = baseURL + '/' + contract.id;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.http.put<Contract>(url, contract, { headers });
  }

  create(baseURL: string, contract: Contract): Observable<Contract> {
    const url = baseURL;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.http.post<Contract>(url, contract, { headers });
  }

  delete(baseURL: string, contract: Contract): Observable<Contract> {
    const url = baseURL + '/' + contract.id;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.http.delete<Contract>(url, { headers });
  }

  getAll(baseURL: string): Observable<Contract[]> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Contract[]>(baseURL, { headers });
  }

  checkValidState(contracts: Contract[]): Object {
    let returnObject = JSON.parse('{"outdated":[],"valid":[]}');

    contracts.forEach((c) => {
      const startDate = new Date(c.startTime); //convert time from string to date
      const endDate = startDate;
      endDate.setMonth(endDate.getMonth() + Number(c.membershipDuration)); //calculate end date with months

      if (endDate.getTime() > Date.now()) {
        returnObject.valid.push(c);
        console.log(`Contract from ${c.firstName} valid`);
      } else {
        returnObject.outdated.push(c);
        console.log(`Contract from ${c.firstName} not valid`);
      }
    });

    return returnObject;
  }
}
