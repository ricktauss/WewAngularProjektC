import { Component, OnInit } from '@angular/core';
import { Course } from "../../entities/course";
import { CourseService } from "../../data-access/course.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Validators } from "@angular/forms";

@Component({
  selector: 'fitness-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private courseService: CourseService) {
  }

 /* createMemberForm = this.formBuilder.group(
    {
      id: [0,Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      address: ['',Validators.compose([Validators.required,Validators.minLength(6)])],
      birthdate: ['',[Validators.required,new AdultValidatorDirective().validate]],
      email: ['',Validators.compose([Validators.required,Validators.email])]
    }
  );*/

  course: Course = {
    id: 0,
    courseID: 0,
    instructor: 'Instruktor name',
    name: '',
    starttime: '',
    endtime: '',
    startdate: new Date('2000-01-01'),
    enddate: new Date('2000-01-01'),
    additionalinfo: 'Kursinfo anfügen'
  }

  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.courseService.getCourseID(id).subscribe((result) => {
        this.course = result
      });
    }
  }

  save(): void {
    this.courseService.create(this.course).subscribe();
    this.router.navigate(['course-search'])
  }
  dateChanged(event: Event, isStart: boolean) {
    let val = (event.target as HTMLInputElement).value
    if (isStart) {
      this.course.startdate = new Date(val)
    } else {
      this.course.enddate = new Date(val)
    }
  }


}
