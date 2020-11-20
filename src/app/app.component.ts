import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppConstants} from './utilities/constants';
import {DataService} from './data.service';
import {Subscription} from 'rxjs';
import {Student} from './common/models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'university-admin';
  disableEdit = true;
  _classes = AppConstants.CLASSES_MOCK_DATA;
  _students = AppConstants.STUDENTS_MOCK_DATA;
  selectedClassId = -1;
  student: Student = null;
  studentSubscriptions: Subscription = new Subscription();
  classSubscriptions: Subscription = new Subscription();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.studentSubscriptions.add(this.dataService.classObservable
      .subscribe((id: number) => {
        this.selectedClassId = id;
      }));
    }

  ngOnDestroy(): void {
    this.studentSubscriptions.unsubscribe();
    this.classSubscriptions.unsubscribe();
  }

  get students(): Student[]{
    return this._students;
  }

  edit(): void{
    this.disableEdit = false;
    this.classSubscriptions.add(this.dataService.studentIdStateObservable
      .subscribe((studentIdState: [number, boolean]) => {
        if (studentIdState){
          this.changeStudentState(studentIdState[0], studentIdState[1]);
        }
      }));
  }

  save(): void{
    this.disableEdit = true;
    this.classSubscriptions.unsubscribe();
  }

  changeStudentState(id: number, studentState: boolean): void{
    this.student = this._students[id];
    this.student.changeState(studentState);
    this._students[id] = this.student;
  }

  filterStudentsByClass(): Student[]{
    if (this.selectedClassId !== -1) {
      return this.students.filter(student => student.classId === this.selectedClassId);
    }
    else{
      return [];
    }
  }

  filterCheckedStudents(): Student[]{
    return this.students.filter(student => student.checked === true);
  }

}
