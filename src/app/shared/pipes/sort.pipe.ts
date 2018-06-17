import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: Array<any>, criteria: string, isDescending: true): Array<any> {
    if (criteria) {
      array.sort((firstElement: any, secondElement: any) => {
        let firstParameter = firstElement[criteria].toString().toLowerCase();
        let secondParameter = secondElement[criteria].toString().toLowerCase();

        if (isDescending) {
          [firstParameter, secondParameter] = [secondParameter, firstParameter];
        }

        if (firstParameter < secondParameter) {
          return -1;
        } else if (firstParameter > secondParameter) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return array;
  }
}
