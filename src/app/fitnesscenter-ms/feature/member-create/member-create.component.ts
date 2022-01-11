import { Component, OnInit } from '@angular/core';
import {initialMember, Member} from "../../entities/member";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../data-access/member.service";


@Component({
  selector: 'flight-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private memberService: MemberService) { }
  member: Member = initialMember;
  ngOnInit(): void {
  }

  create(): void{
    this.memberService.create(this.member).subscribe({

      error: (errResp) => {
        console.error('Error Create/Update Member', errResp);
      },
      complete: () => {
        this.member = initialMember;
        this.router.navigate(['member-search']);
      },
    });

  }

  dateChanged(event: Event) {
    var val = (event.target as HTMLInputElement).value;
    this.member.birthdate = new Date(val);
  }


}
