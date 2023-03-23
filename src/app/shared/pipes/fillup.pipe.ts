import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillup'
})
export class FillupPipe implements PipeTransform {

  transform(num: any, size: number) {
    let strNum: string = num.toString();
    while (strNum.length < size) strNum = "0" + strNum;
    return strNum;
  }

}
