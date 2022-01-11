import {Component, OnInit} from '@angular/core';
import {initialMember, Member} from "../../entities/member";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../data-access/member.service";
import {Observable} from "rxjs";

@Component({
  selector: 'flight-member-create-edit',
  templateUrl: './member-create-edit.component.html',
  styleUrls: ['./member-create-edit.component.css']
})
export class MemberCreateEditComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private memberService: MemberService) {
  }

  member: Member = initialMember;


  ngOnInit(): void {
    if (this.router.url != '/member-create-edit') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      var memberById = this.memberService.getMemberById(id).subscribe({
        next: (member: Member) => {
          this.member = member;
        },
        error: (errResp) => {
          console.error('Error Getting Member by Id', errResp);
        },
      });

    }
  }

  update(): void{

    this.memberService.update(this.member).subscribe({

      error: (errResp) => {
        console.error('Error Create/Update Member', errResp);
      },
      complete: () => {
        this.router.navigate(['member-search']);
      },
    });

  }

  dateChanged(event: Event) {
    var val = (event.target as HTMLInputElement).value;
      this.member.birthdate = new Date(val);
  }










}
