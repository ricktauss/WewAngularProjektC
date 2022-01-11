import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../entities/member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  membersUrl: string = "http://localhost:3000/members";
  constructor(private htttpClient: HttpClient) { }


  getMembers(): Observable<Member[]>{
    var result = this.htttpClient.get<Member[]>(this.membersUrl);
    console.log(result);
    return result;
  }

  getMemberById(id: number): Observable<Member>{
    return this.htttpClient.get<Member>(this.membersUrl + "/" + id);
  }

  search(firstname: string,lastname: string): Observable<Member[]>{
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams()
      .set('firstname', firstname)
      .set('lastname', lastname);

    var result =  this.htttpClient.get<Member[]>(this.membersUrl, { headers, params });

    console.log(result);
    return result;
  }

  delete(member: Member): Observable<Member>{
    var response = this.htttpClient.delete<Member>(this.membersUrl + "/" + member.id);
    return response;

  }

  update(member: Member): Observable<Member> {


    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.htttpClient.put<Member>(this.membersUrl + "/" + member.id , member , { headers });
  }

  create(member: Member): Observable<Member> {


    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.htttpClient.post<Member>(this.membersUrl, member , { headers });
  }














}
