import { Component, ContentChildren, QueryList, ElementRef, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { JsBarcodeDirective } from './jsbarcode';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'jsbarcodes',
  template: '<ng-content></ng-content>',
})
export class JsBarcodesComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(JsBarcodeDirective, { read: ElementRef }) barcodes: QueryList<ElementRef>;
  barcodeElements: Array<Element> = [];

  ngAfterContentInit() {
    this.barcodeElements = this.barcodes.toArray().map(barcode => {
      const barcodeElement = barcode.nativeElement;
      barcodeElement.dataset.barcoded = true;

      return barcodeElement;
    });
  }

  ngAfterViewInit() {
    JsBarcode(this.barcodeElements).init();
  }
}
