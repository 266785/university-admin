import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classSelect'
})
export class ClassSelectPipe implements PipeTransform {

  transform(value: string): string {
    if (!value){
      return 'Select a class to continue';
    }
  }

}
