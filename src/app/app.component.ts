import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AppConstants} from './utilities/constants';
import {DataService} from './data.service';
import {UniversityClass} from './common/models/university-class';
import {take} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
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
  filteredStudents: Student[] = null;
  selectedClassId = -1;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
      this.getClass();
    }

  getClass(): void{
    this.dataService.classObservable
      .pipe(take(1))
      .subscribe((id: number) => {
        this.selectedClassId = id;
      });
  }

  showClass(): string{
    return this._classes[this.selectedClassId] ? this._classes[this.selectedClassId].className : '';
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  get students(): Student[]{
    return this._students;
  }

  passStudents(): Student[]{
    this.filteredStudents = this.students.filter(student => student.classId === this.selectedClassId);
    console.log(this.filteredStudents);
    return this.filteredStudents;

  }

  edit(): void{
    this.disableEdit = false;
    this.getClass();
    this.filteredStudents = this.students.filter(student => student.classId === this.selectedClassId);
  }

  save(): void{
    this.disableEdit = true;

  }

}
