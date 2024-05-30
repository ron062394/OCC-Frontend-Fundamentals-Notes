```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="colors-background-img.css" />
  </head>
  <body>
    <h1>CSS Colors, Backgrounds, and Images Example</h1>

    <h2>Color Values</h2>
    <p class="color-example">This is an example of different color values.</p>

    <h2>Background Colors and Images</h2>
    <div class="background-example">
      <p>This is an example of a background color.</p>
    </div>

    <h2>Background Positioning and Repeating</h2>
    <div class="background-position-example">
      <p>
        This is an example of a background image with different positioning and
        repeating.
      </p>
    </div>

    <h2>Opacity and Transparency</h2>
    <p class="opacity-example">
      This is an example of opacity and transparency.
    </p>

    <h2>Adding Images to Web Pages</h2>
    <img src="image.jpg" alt="Example Image" class="image-example" />

    <h2>Image Sizing and Alignment</h2>
    <img src="image.jpg" alt="Example Image" class="image-sizing-example" />
  </body>
</html>
```

```css
/* Color Values */
.color-example {
  color: red;
  background-color: #00ff00;
}

/* Background Colors and Images */
.background-example {
  background-color: #ff0000;
}

/* Background Positioning and Repeating */
.background-position-example {
  background-image: url("background.jpg");
  background-position: center top;
  background-repeat: no-repeat;
}

/* Opacity and Transparency */
.opacity-example {
  background-color: rgba(255, 0, 0, 0.5);
}

/* Adding Images to Web Pages */
.image-example {
  display: block;
  margin: 0 auto;
}

/* Image Sizing and Alignment */
.image-sizing-example {
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
}
```