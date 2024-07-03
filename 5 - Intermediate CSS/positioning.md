### SEND TEMPLATE LINK TO ZOOM CHAT
```
HTML: https://github.com/ron062394/OCC-Frontend-Fundamentals/blob/main/Intermediate%20CSS/positioning.md
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Positioning Example</title>
    <style>
      /* Ancestor Element */
      .ancestor {
        position: relative;
        border: 2px solid #000;
        padding: 20px;
        margin: 20px;
      }
    </style>
    <link rel="stylesheet" href="./selectors.css" />
  </head>
  <body>
    <div class="ancestor">
      <div>This is the first line</div>
      <div>This is the second line</div>
      <div class="relative">Relative Positioning</div>
      <div class="absolute">Absolute Positioning</div>
      <div class="fixed">Fixed Positioning</div>
    </div>
    <div class="sticky">Sticky Positioning</div>
    <div style="height: 2000px">
      Scroll down to see the sticky element in action.
    </div>
    <br />
  </body>
</html>
```

```css
/* Relative Positioning */
.relative {
  position: relative;
  top: 0px;
  left: 200px;
  background-color: #ffcc00;
}

/* Absolute Positioning */
.absolute {
  position: absolute;
  top: 0;
  left: 50px;
  background-color: #00ccff;
}

/* Fixed Positioning */
.fixed {
  position: fixed;
  bottom: 0px;
  right: 0px;
  background-color: #ff0000;
  color: white;
  padding: 10px;
}

/* Sticky Positioning */
.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0px;
  background-color: #33cc33;
}
```
