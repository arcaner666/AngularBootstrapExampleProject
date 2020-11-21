import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[SadeceSayi]'
})
export class SadeceSayiDirective {

  constructor() { }
  @HostListener('keypress', ['$event']) onkeypress(e: KeyboardEvent) {
    console.log(e.key);
    if (e.keyCode < 48 || e.keyCode > 58) {
      e.preventDefault();
    }
  }
}
