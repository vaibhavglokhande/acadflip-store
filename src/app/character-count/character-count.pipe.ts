import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterCount'
})
export class CharacterCountPipe implements PipeTransform {
  

  transform(value: any,price:number = 1, ...args: any[]): any {
    let characterCount = (<string>value).length;
    let amount = characterCount*price;
    return 'Your character count is ' + characterCount+' and it will cost a total of '+amount;
  }

}
