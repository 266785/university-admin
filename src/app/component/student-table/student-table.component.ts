import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Student} from '../../common/models/student';
import {DataService} from '../../data.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() passedStudents: Student[];
  private _students: Student[] = null;
  private _columnTags = ['firstName', 'lastName'];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this._students = this.passedStudents;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._students = this.passedStudents;
    if (changes.passedStudents) {
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  get students(): Student[]{
    return this._students;
  }
  get columnTags(): string[]{
    return this._columnTags;
  }

  passState(studentId: number, studentState: boolean): void{
    this.dataService.studentIdStateSubject.next([studentId, studentState]);
  }

}
