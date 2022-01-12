import { Component, OnInit } from '@angular/core';
import {initialMember, Member} from "../../entities/member";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../data-access/member.service";
import {FormBuilder,Validators} from "@angular/forms";
import {AdultValidatorDirective} from "../../../shared/validation/adult-validator.directive";


@Component({
  selector: 'flight-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {
  member: Member = initialMember;

  createMemberForm = this.formBuilder.group(
    {
      id: [0,Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      address: ['',Validators.compose([Validators.required,Validators.minLength(6)])],
      birthdate: ['',[Validators.required,new AdultValidatorDirective().validate]],
      email: ['',Validators.compose([Validators.required,Validators.email])]
    }
  );




  constructor(private router: Router, private activatedRoute: ActivatedRoute, private memberService: MemberService, private formBuilder: FormBuilder) {
  this.member = Object.assign({},initialMember);
  }

  ngOnInit(): void {
  }

  create(): void{
    this.member.id = this.createMemberForm.get('id')?.value;
    this.member.firstname = this.createMemberForm.get('firstname')?.value;
    this.member.lastname = this.createMemberForm.get('lastname')?.value;
    this.member.address = this.createMemberForm.get('address')?.value;
    this.member.email = this.createMemberForm.get('email')?.value;
    this.member.birthdate = this.createMemberForm.get('birthdate')?.value;

    this.memberService.create(this.member).subscribe({

      error: (errResp) => {
        console.error('Error Create Member', errResp);
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
