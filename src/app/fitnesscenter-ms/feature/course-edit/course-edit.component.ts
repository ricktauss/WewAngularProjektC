import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../../entities/course";

@Component({
  selector: "fitness-course-edit",
  templateUrl: "./course-edit.component.html",
  styleUrls: ["./course-edit.component.css"]
})
export class CourseEditComponent implements OnInit {
  @Input() item: Course | undefined;
  @Output() newCourse = new EventEmitter<Course>();
  course?: Course; //temporary equipment object

  constructor() {
  }

  ngOnInit(): void {
    console.log("item");
    this.course = Object.assign({}, this.item);
  }

  update(): void {
    this.newCourse.emit(this.course);
  }

  ngOnChanges() {
    this.course = Object.assign({}, this.item);
  }
}
