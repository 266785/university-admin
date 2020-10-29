import {Component, Input, NgModule, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import { FormsModule } from '@angular/forms';

import {DataService} from '../../data.service';
import {UniversityClass} from '../../common/models/university-class';

@NgModule({
  imports: [
    FormsModule
  ]
})

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit, OnDestroy {
  @Input() editable: boolean;
  @Input() classes: UniversityClass[];

  private _editable = true;
  private _classes: UniversityClass[] = null;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this._editable = this.editable;
    this._classes = this.classes;
    }

  selectEvent(id: string): void{
      if (id) {
        this.dataService.classSubject.next(+id);
      }
    }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
