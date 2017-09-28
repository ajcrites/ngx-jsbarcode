import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Directive({
  selector: '[jsbarcode]'
})
export class JsBarcodeDirective implements AfterViewInit {
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    if (!this.el.nativeElement.dataset.barcoded) {
      JsBarcode(this.el.nativeElement).init();
    }
  }
}
