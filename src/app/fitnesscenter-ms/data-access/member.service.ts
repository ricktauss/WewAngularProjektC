import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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






}
