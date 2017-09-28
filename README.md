# JsBarcode for Angular
Angular Module for the [JsBarcode](https://github.com/lindell/JsBarcode) library.

This exports a directive and a component:
* `[jsbarcode]`: apply jsbarcode to a single element, or multiple elements
 contained by `jsbarcodes`.
* `jsbarcodes`: component that applies `jsbarcode` to all `[jsbarcode]`
 elements it contains. This is more efficient since it only calls `JsBarcode`
 once instead of once per each element.

## Usage
You can use all of the attributes on a JsBarcode element specified in the
[JsBarcode](https://github.com/lindell/JsBarcode#or-define-the-value-and-options-in-the-html-element)
documentation.

```
<svg jsbarcode jsbarcode-height="70" [attr.jsbarcode-value]="code">
```

If you are using `*ngFor`, to loop over elements, you can wrap this in
`<jsbarcodes>` so that the `JsBarcode` function is only run once.

```
<jsbarcode>
    <div *ngFor="let barcode of barcodes">
        <img jsbarcode [attr.jsbarcode-value]="barcode.code">
    </div>
</jsbarcode>
```

This has the same effect whether you use `<jsbarcode>` or not, it's just
slightly more efficient to use it.

*Note:* if `<jsbarcode>` wraps elements that alter content children it may
not be effective. This will still work, but it will call `JsBarcode` for
each element.
