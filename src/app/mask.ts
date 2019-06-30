import { Directive, Attribute, Host, Self, Optional } from '@angular/core';
import { TextInput } from 'ionic-angular';

@Directive({
  selector: '[mask]',
  host: {
    '(keyup)': 'onInputChange($event)'
  }
})
export class Mask {
  enforce: string[];
  pattern: string;
  nativeElement: HTMLInputElement;

  constructor(
    @Attribute('mask') pattern: string,
    @Attribute('pattern') enforce: string,
    @Host() @Self() @Optional() public hostInput : TextInput,
  ) {
    this.pattern = pattern;
    this.enforce = enforce ? JSON.parse(enforce) : [];
  }

  ngAfterViewInit() {
    // TODO: Sanity-check that the directive was actually added to an input element.
    // It is not valid for anything else.
    // console.log('after init: ', this.hostInput._native);
    this.nativeElement = this.hostInput._native.nativeElement as HTMLInputElement;
    this.updateMask({ target: this.nativeElement });
  }

  onInputChange(e) {
    this.updateMask(e);
  }

  updateMask(e) {
    try {
      let value = e.target.value,
        caret = e.target.selectionStart,
        pattern = this.pattern,
        reserve = pattern.replace(/\*/, 'g'),
        applied = '',
        ordinal = 0;

      if (e.keyCode === 8 || e.key === 'Backspace' || e.keyCode === 46 || e.key === 'Delete') {
        if (value.length) {
          // remove all trailing formatting
          while (value.length && pattern[value.length] && pattern[value.length] !== '*') {
            value = value.substring(0, value.length - 1);
          }
          // remove all leading formatting to restore placeholder
          if (pattern.substring(0, value.length).indexOf('*') < 0) {
            value = value.substring(0, value.length - 1);
          }
        }
      }

      // apply mask characters
      for (var i = 0; i < value.length; i++) {
        // enforce pattern limit
        if (i < pattern.length) {
          // match mask
          if (value[i] === pattern[ordinal]) {
            applied += value[i];
            ordinal++;
          } else if (reserve.indexOf(value[i]) > -1) {
            // skip other reserved characters
          } else {
            // apply leading formatting
            while (ordinal < pattern.length && pattern[ordinal] !== '*') {
              applied += pattern[ordinal];
              ordinal++;
            }
            applied += value[i];
            ordinal++;
            // apply trailing formatting
            while (ordinal < pattern.length && pattern[ordinal] !== '*') {
              applied += pattern[ordinal];
              ordinal++;
            }
          }
        }
      }


      this.enforce.forEach(function(el, index) {
        var split = [];

        if (el !== undefined && applied) {
          split = applied.split('');
          split[index] = el;
          applied = split.join('');
        }
      });

      // e.target.value = applied;
      this.hostInput.setValue(applied);
      if (caret < value.length) {
        e.target.setSelectionRange(caret, caret);
      }
    } catch (ex) {
      console.error(ex.message);
    }

  }

}
