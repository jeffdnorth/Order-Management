import { Pipe, PipeTransform } from '@angular/core';
import { Salesperson } from './sper.class';

@Pipe({
  name: 'searchSper'
})
export class SearchSperPipe implements PipeTransform {

  transform(spers: Salesperson[], searchCriteria: string): Salesperson[] {
    if(spers == null || searchCriteria.length === 0) {
      return spers;
    }
    let search = searchCriteria.toLowerCase();
    let selectedSpers: Salesperson[] = [];
    for(let c of spers) {
      if(
      c.id.toString().includes(search)
      || c.name.toLowerCase().includes(search)
      || c.stateCode.toLowerCase().includes(search)
      || c.sales.toString().includes(search)
      ) {
      
        selectedSpers.push(c);
      }
    }
    return selectedSpers;
  }

}
