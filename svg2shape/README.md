# SVG Path to Shape System
Install this system:[SVG Path to Shape.origami-system-v1.0.1.zip](https://github.com/eromanc/origami-components/files/12021779/SVG.Path.to.Shape.origami-system-v1.0.1.zip)

This system allows you to use a [SVG Path](https://www.w3.org/TR/SVG2/paths.html) and convert it to a JSON Path, a Shape Object or right out using it into an Origami Layer.


It doesn’t support all SVG Path commands.
currently it supports:

* M/m (Move To relative and absolute)
* L/l (Line To relative and absolute)
* H/h (Horizontal Line relative and absolute)
* V/v (Vertical Line relative and absolute)
* Z/z (Close Path)
* C (Cubic Bézier Curve, only absolute)

Here are a few small examples of SVG Paths:

* Rectangle: `M 0 0 V 90 H 90 V 0 H0 Z`
* Triangle: `M38 0L70.909 57L5.09103 57L38 0Z`
* Circle: `M69 34.5C69 53.5538 53.5538 69 34.5 69C15.4462 69 0 53.5538 0 34.5C0 15.4462 15.4462 0 34.5 0C53.5538 0 69 15.4462 69 34.5Z`

The system contains 3 components:

* **SVG Path to JSON Shape.** This is a patch component and is the core component in the System. Is the one that converts an SVG Path into a JSON Shape.
* **SVG Path To Shape** A convenience patch component that encapsulates *SVG Path to JSON Shape* and returns already a Shape Object instead of a JSON.
* **SVG Path Layer.** A replacement of the standard Shape Layer that supports SVG Path as its input.

<img width="853" alt="Screenshot 2023-07-11 at 6 07 33 PM" src="https://github.com/eromanc/origami-components/assets/1731560/f045bef3-2d93-4266-80a8-73bb732d46fb">
