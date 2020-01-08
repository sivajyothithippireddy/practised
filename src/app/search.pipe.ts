import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchby): any {
    if (!searchby) {
      return value;
    }
    return value.filter(a=>a.title.toLowerCase().startsWith(searchby.toLowerCase()))
  }

}
