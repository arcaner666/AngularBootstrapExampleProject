import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[BuyukHarf]'
})
export class BuyukHarfDirective {

  constructor() { }

  @HostListener('input', ['$event']) onInput(e) {
    var d = e.target.value;
    console.log(d);
    d = d.toUpperCase();
    e.target.value = d;
  }
}
