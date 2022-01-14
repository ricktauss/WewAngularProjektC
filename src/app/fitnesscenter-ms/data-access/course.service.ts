import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../entities/course";

@Injectable({
  providedIn: "root"
})

export class CourseService {
  courseURL: string = "http://localhost:3000/courses";

  constructor(private httpClient: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    let courses = this.httpClient.get<Course[]>(this.courseURL);
    return courses;
  }

  getCourseID(id: number): Observable<Course> {
    return this.httpClient.get<Course>(this.courseURL + "/" + id);
  }

  search(name: string): Observable<Course[]> {
    const headers = new HttpHeaders().set("Accept", "application/json");
    const params = new HttpParams().set("name_like", name);
    let courses = this.httpClient.get<Course[]>
                  (this.courseURL, { headers, params });
    return courses;
  }

  delete(course: Course): Observable<Course> {
    let delCourse = this.httpClient.delete<Course>(this.courseURL + "/" + course.id);
    return delCourse;

  }

  update(course: Course): Observable<Course> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");
    return this.httpClient.put<Course>(this.courseURL + "/" + course.id, course, { headers });
  }

  create(member: Course): Observable<Course> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");
    return this.httpClient.post<Course>(this.courseURL, member, { headers });
  }
}
