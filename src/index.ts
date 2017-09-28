import { NgModule } from '@angular/core';
import { JsBarcodeDirective } from './jsbarcode';
import { JsBarcodesComponent } from './jsbarcodes';

@NgModule({
  declarations: [
    JsBarcodeDirective,
    JsBarcodesComponent,
  ],
  exports: [
    JsBarcodeDirective,
    JsBarcodesComponent,
  ],
})
export class JsBarcodeModule { }
