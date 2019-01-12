import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(item: any[], searchText: string): string[]{
    console.log(searchText);
    if(!item) return [];
    if(!searchText) return item;

    searchText = searchText.toLowerCase();

    return item.filter(it => {
      return it.name.toLowerCase().includes(searchText) ||
      it.username.toLowerCase().includes(searchText);
    });
  }

}
