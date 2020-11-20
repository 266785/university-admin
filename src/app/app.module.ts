import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentTableComponent } from './component/student-table/student-table.component';
import {ClassListComponent} from './component/class-list/class-list.component';
import {FormsModule} from '@angular/forms';
import { ClassSelectPipe } from './Pipe/class-select.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    StudentTableComponent,
    ClassSelectPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
