import { Component, OnInit } from "@angular/core";
import { Course } from "../../entities/course";
import { CourseService } from "../../data-access/course.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Form, FormBuilder, Validators } from "@angular/forms";
import {EndDateValidatorDirective} from "../../../shared/validation/enddate-validator.directive";

@Component({
  selector: "fitness-course-add",
  templateUrl: "./course-add.component.html",
  styleUrls: ["./course-add.component.css"]
})
export class CourseAddComponent implements OnInit {


  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private courseService: CourseService, private formBuilder: FormBuilder) {
  }

  course: Course = {
    id: 0,
    instructor: "",
    name: "",
    starttime: "",
    endtime: "",
    startdate: new Date(),
    enddate: new Date(),
    additionalinfo: ""
  };

  addCourseForm = this.formBuilder.group(
    {
      id: [0],
      instructor: ["", Validators.required],
      name: ["", Validators.required],
      starttime: ["", Validators.required],
      endtime: ["", Validators.required],
      startdate: [new Date()],
      enddate: [new Date(), [Validators.required, new EndDateValidatorDirective().validate]],
      additionalinfo: ["", Validators.required]
    });

  ngOnInit() {

  }


  save(): void {

    this.course.instructor = this.addCourseForm.get('instructor')?.value;
    this.course.name = this.addCourseForm.get('name')?.value;
    this.course.starttime = this.addCourseForm.get('starttime')?.value;
    this.course.endtime = this.addCourseForm.get('endtime')?.value;
    this.course.startdate = this.addCourseForm.get('startdate')?.value;
    this.course.enddate = this.addCourseForm.get('enddate')?.value;
    this.course.additionalinfo = this.addCourseForm.get('additionalinfo')?.value;

    this.courseService.create(this.course).subscribe();
    this.router.navigate(["course-search"]);

  }

  dateChanged(event: Event, isStart: boolean) {
    let val = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.course.startdate = new Date(val);
    } else {
      this.course.enddate = new Date(val);
    }
  }


}
