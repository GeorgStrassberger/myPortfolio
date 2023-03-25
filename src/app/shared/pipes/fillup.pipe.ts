import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillup',
})
export class FillupPipe implements PipeTransform {
  transform(value: any, size: number = 1): string {
    let valueAsString: string = value.toString();
    while (valueAsString.length < size) valueAsString = '0' + valueAsString;
    return valueAsString;
  }
}
