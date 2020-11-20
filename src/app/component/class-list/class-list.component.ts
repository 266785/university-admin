import {Component, Input, NgModule, OnDestroy, OnInit, } from '@angular/core';
import {Subject} from 'rxjs';
import { FormsModule } from '@angular/forms';

import {DataService} from '../../data.service';
import {UniversityClass} from '../../common/models/university-class';
import {trigger, state, style, animate, transition} from '@angular/animations';

@NgModule({
  imports: [
    FormsModule
  ]
})

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css'],
  animations: [
    trigger('classValidation', [
      state('classSelected', style({
        height: '0em',
        opacity: 0,
        backgroundColor: 'white'
      })),
      state('noClassSelected', style({
        height: '1.1em',
        opacity: 1,
        backgroundColor: 'red'
      })),
      transition('classSelected => noClassSelected', [
        animate('0.2s')
      ]),
      transition('noClassSelected => classSelected', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class ClassListComponent implements OnInit, OnDestroy {
  @Input() editable: boolean;
  @Input() classes: UniversityClass[];

  isClassSelected = true;
  private _editable = true;
  private _classes: UniversityClass[] = null;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this._editable = this.editable;
    this._classes = this.classes;
    }

  selectEvent(id: string): void{
      if (id){
        this.isClassSelected = true;
        this.dataService.classSubject.next(+id);
      }
      else{
        this.isClassSelected = false;
        this.dataService.classSubject.next(-1);
      }
    }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
