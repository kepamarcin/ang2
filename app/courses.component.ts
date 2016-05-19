import {Component} from '@angular/core'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `,
    providers: [CourseService]
    
})
export class CoursesComponent {
    title = "TItle of courses page";
    courses;
    
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
   
    }
}