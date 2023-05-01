import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourMinute'
})
export class HourMinutePipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    return hours + 'h ' + minutes + 'm';
  }



}


