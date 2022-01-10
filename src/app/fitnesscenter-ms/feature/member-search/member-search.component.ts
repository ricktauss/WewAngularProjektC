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
  firstname: string = '';
  lastname: string = '';

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
  this.memberService.getMembers().subscribe({
    next: (members: Member[]) =>{
      this.members = members;
    },
    error: (errResp) => {
      console.error('Error loading Members', errResp);
    }
  });
  }

  search(): void{
    this.memberService.search(this.firstname, this.lastname).subscribe({
      next: (members: Member[]) => {
        this.members = members;
      },
      error: (errResp) => {
        console.error('Error loading Members', errResp);
      },
    });
  }

  delete(member: Member): void{



    if(window.confirm("Wollen sie Hr." +   " " + member.lastname + " wirklich löschen ?")){
      this.memberService.delete(member).subscribe({
        next: () => {
          this.members = this.members.filter(m => m != member);
        },
        error: (errResp) => {
          console.error('Error Deleting Member', errResp);
        },
      });
    }



  }





}
