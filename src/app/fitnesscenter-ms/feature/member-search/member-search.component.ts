import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../data-access/member.service";
import {Member} from "../../entities/member";

@Component({
  selector: 'flight-member-search',
  templateUrl: './member-search.component.html',
  providers:[{
    provide: MemberService,
    useClass: MemberService
  }],
  styleUrls: ['./member-search.component.css']

})
export class MemberSearchComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((result) =>{
      this.members = result;
    });
  }

}
