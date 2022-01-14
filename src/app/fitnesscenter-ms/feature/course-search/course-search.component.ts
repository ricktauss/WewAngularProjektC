import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../data-access/course.service";
import { Course } from "../../entities/course";


@Component({
  selector: "fitness-course-search",
  templateUrl: "./course-search.component.html",
  /*providers:[{
    provide: CourseService,
    useClass: CourseService
  }],*/
  styleUrls: ["./course-search.component.css"]
})
export class CourseSearchComponent implements OnInit {

  courses: Course[] = [];
  name: string = "";
  selectedCourse?: Course;

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  search(): void {
    this.courseService.search(this.name).subscribe((courses) => {
      console.log(this.name);
      this.courses = courses;
    });
  }

  delete(course: Course): void {
    if (window.confirm("Sind sie sich sicher, dass" + " " + course.name
      + " wirklich gelöscht werden soll?")) {
      this.courseService.delete(course).subscribe();
      this.courses = this.courses.filter(c => c != course);
    }
  }

  select(selectedCourse: Course): void {
    this.selectedCourse = selectedCourse;
  }

  update(newCourse: Course) {

    this.courseService.update(newCourse).subscribe({
      error: (errResp) => {
        console.log("Error Updating Fitness Equipment Device", errResp);
      }, complete: () => {
        console.log("Update of Fitness Equipment Device successful.");
        this.selectedCourse = undefined;
        this.search();
      }
    });
  }

}
