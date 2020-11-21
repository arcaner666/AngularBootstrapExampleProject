import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BoslukluYaz'
})
export class BoslukluYazPipe implements PipeTransform {

  transform(value: string): string {
    var s = "";
    for (let i = 0; i < value.length; i++) {
      s += value.charAt(i) + " ";
    }
    return s;
  }

}
