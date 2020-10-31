import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppConstants} from './utilities/constants';
import {DataService} from './data.service';
import {Subject} from 'rxjs';
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
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
      this.getClass();
    }

  getClass(): void{
    this.dataService.classObservable
      .subscribe((id: number) => {
        this.selectedClassId = id;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  get students(): Student[]{
    return this._students;
  }

  edit(): void{
    this.disableEdit = false;

    this.dataService.studentIdStateObservable
      .subscribe((studentIdState: [number, boolean]) => {
        if (studentIdState){
          this.changeStudentState(studentIdState[0], studentIdState[1]);
        }
      });
  }

  save(): void{
    this.disableEdit = true;

  }

  changeStudentState(id: number, studentState: boolean): void{
    this.student = this._students[id];
    this.student.changeState(studentState);
    this._students[id] = this.student;
  }

  filterStudentsByClass(): Student[]{
    return this.students.filter(student => student.classId === this.selectedClassId);
  }

  filterCheckedStudents(): Student[]{
    return this.students.filter(student => student.checked === true);
  }

}
