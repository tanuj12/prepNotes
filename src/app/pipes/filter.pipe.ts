import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return this.chunk(items,3);
    }
    searchText = searchText.toLocaleLowerCase();

    items =items.filter(it => {
      return it.Name.toLocaleLowerCase().includes(searchText);
    });
    return this.chunk(items,3)
  }
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));

    }

    return R;
  }
}
