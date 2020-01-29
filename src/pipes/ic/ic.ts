import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the IcPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'ic',
})
export class IcPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    value = String(value);

    if (/\d{6}-\d{2}-\d{4}/.test(value)) { return value }
    else {
      return value.slice(0, 6) + '-' + value.slice(6, 8) + '-' + value.slice(8);
    }
  }
}
