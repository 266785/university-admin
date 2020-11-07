import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from '../../common/models/student';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit, OnChanges {
  @Input() passedStudents: Student[];
  private _students: Student[] = null;
  private _columnTags = ['firstName', 'lastName'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this._students = this.passedStudents;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._students = this.passedStudents;
    if (changes.passedStudents) {
    }
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
