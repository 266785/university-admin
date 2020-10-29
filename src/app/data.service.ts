import { Injectable } from '@angular/core';
import {Student} from './common/models/student';
import {BehaviorSubject, Subject} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';
import {UniversityClass} from './common/models/university-class';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _classId$ = new BehaviorSubject<number>(null);
  // private _class$ = new BehaviorSubject<UniversityClass>(null);
  // private readonly _newStudent$ = new Subject<Student>();
  // selectedClass = this._class$.asObservable();

  constructor() { }

  get classSubject(): Subject<number> {
  return this._classId$;
  }

  get classObservable(): Observable<number>{
    return this._classId$.asObservable();
  }

  // get newStudentSubject(): Subject<Student> {
  //   return this._newStudent$;
  // }
  //
  // get newStudentObservable(): Observable<Student> {
  //   return this._newStudent$.asObservable();
  // }
}
