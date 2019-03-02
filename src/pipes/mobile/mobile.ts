import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MobilePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mobile',
})
export class MobilePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    value = String(value);

    if (value[0] !== '6') { value = '6' + value; }

    return value;
  }
}
