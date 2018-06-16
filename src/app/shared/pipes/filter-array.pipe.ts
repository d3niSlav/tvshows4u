import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {
  transform(array: Array<any>, searchCriteria: string): any {
    const categories = searchCriteria.split(',');

    array = array.filter((item) => {
      const presentCategories = categories.filter((category) => {
        return item.genre.indexOf(category) >= 0;
      });

      return presentCategories.length > 0 && presentCategories.length === categories.length;
    });

    return array;
  }
}
