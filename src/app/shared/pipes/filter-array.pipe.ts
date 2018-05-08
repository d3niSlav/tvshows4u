import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {
  transform(values: string, searchCriteria: string): any {
    const arrayValues = JSON.parse(values);
    const searchValues = searchCriteria.split(',');
    console.log(arrayValues);
    console.log(searchValues);
  }
}
