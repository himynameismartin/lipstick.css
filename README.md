# lipstick.css

A **Lorem Ipsum CSS Toolkit**, or *lipstick.css*, is a pure CSS proof of concept placeholder class library written in [Less](http://lesscss.org/).

## A Quickstart

```html
<link href="/css/lipstick.css" rel="stylesheet">

<!-- By default, .lipstick__image makes 100% x 100% of parent width image, which you might override by, for example, .lipstick__image--8x8 -->
<img src="//:0" alt="An 8x8px image" class="lipstick__image lipstick__image--8x8" />

<!-- A medium paragraph by default -->
<p class="lipstick__text"></p>
```

## An Advanced Example

```html
<link href="/css/lipstick.css" rel="stylesheet">

<!-- You can set both dimensions (.lipstick__image--765x120), and color (.lipstick__image--black) of the image -->
<img src="//:0" alt="A 765x120px black image" class="lipstick__image lipstick__image--765x120 lipstick__image--black" />

<!-- For the text elements, you can define length with paragraph... -->
<div class="lipstick__text--large-paragraph"></div>

<!-- ...word... -->
<div class="lipstick__text--5-words"></div>

<!-- ...or character units. -->
<div class="lipstick__text--1-character"></div>
```

## A Playground

[Have fun.](http://codepen.io/himynameismartin/pen/zZooLd)

## License

Dual CC0 and MIT.
