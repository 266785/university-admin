import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _classId$ = new BehaviorSubject<number>(null);
  private _studentIdState$ = new BehaviorSubject<[number, boolean]>(null);

  constructor() { }

  get classSubject(): Subject<number> {
    return this._classId$;
  }

  get classObservable(): Observable<number>{
    return this._classId$.asObservable();
  }

  get studentIdStateSubject(): Subject<[number, boolean]> {
    return this._studentIdState$;
  }

  get studentIdStateObservable(): Observable<[number, boolean]>{
    return this._studentIdState$.asObservable();
  }

}
