```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS Properties Teaching Example</title>
    <link rel="stylesheet" href="./typography.css" />
  </head>
  <body>
    <div class="font-family-size">Changes font family and size</div>
    <div class="bold">Changes format to bold</div>
    <div class="italic">Changes format to italic</div>
    <div class="underline">Adds underline</div>
    <div class="center-align">Centers text</div>
    <div class="line-through">Adds line-through</div>
    <div class="line-height">Sets line height</div>
    <div class="letter-spacing">Sets letter spacing</div>
    <div class="text-shadow">Adds text shadow</div>
  </body>
</html>
```

```css
.font-family-size {
  font-family: "Arial", sans-serif;
  font-size: 20px;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.underline {
  text-decoration: underline;
}

.center-align {
  text-align: center;
}

.line-through {
  text-decoration: line-through;
}

.line-height {
  line-height: 1.5;
}

.letter-spacing {
  letter-spacing: 2px;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  /* Horizontal offset, Vertical offset, Shadow Strength, color */
  /* negative(left) - positive(right) */
}
```
