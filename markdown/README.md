# Markdown System

Install this system: [markdown.origami-system-v1.0.5.zip](https://github.com/eromanc/origami-components/files/10962948/markdown.origami-system-v1.0.5.zip)

Example: [markDown Example.zip](https://github.com/eromanc/origami-components/files/10962939/markDown.Example.zip)

This system allows you to easily style text using [Markdown](https://en.wikipedia.org/wiki/Markdown) 

It doesn't support everything on Markdown, it only has support of the most basic attributes:
* Headers (H1, H2 and H3)
* Bold
* Emphasis
* Strikethrough

It contains 3 components:

* **Markdown Parser.** This is a patch component that Receives a markdown text and returns a parsed text and the text attributes.
* **Markdown Style.** Allows you to specify easily a custom text style that can be used with the Markdown Parser in any of its style ports.
* **Markdown Text Layer.** A replacement of the Text Layer that supports Markdown syntax to style the text.


Here's an example of the how to use the Markdown Parser component:

<img width="350" alt="Markdown Parser" src="https://user-images.githubusercontent.com/1731560/224858714-35ce61d3-47c4-4c4b-b500-b7c1ac3cd2bd.png">

The Markdown input would be something like this:
```
# Header
## Subhead
### Small Header

One **two** three **four** five.

More text with *italics* sample.

~~Strikethrough~~
```

And the patch has two outputs one with the markdown attributes stripped out and another one with the text attributes ready to be connected to the `Style Override` Port on a Text Layer.

It is possible you want to customize certain properties such as font, color, etc.
These properties can be configured on the other input port for the Markdown Parser. As a convenience there's also a Markdown Style patch that simplifies the task of selecting a proper font, color, etc. without risking having an error in the JSON parameters

<img width="350" alt="Markdown Style" src="https://user-images.githubusercontent.com/1731560/224859423-b7611918-7529-4b9a-bbc1-e84f9c01b937.png">

Last but not least is the Markdown Text Layer

Which wraps those two other patches and for the most part is the only patch you would need.
Styles can be configured directly on the layer

<img width="400" alt="Markdown Text Layer" src="https://user-images.githubusercontent.com/1731560/224859948-3107730c-dbf7-4b9e-9d7f-3ba71ff3ffc0.png">

