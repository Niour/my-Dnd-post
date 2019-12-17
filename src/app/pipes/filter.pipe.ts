import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (filterString === undefined || filterString === 'all') {
      filterString = '';
    }
    if (value.length === 0 || value === '' || value === 'all') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName].toUpperCase().includes(filterString.toUpperCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
