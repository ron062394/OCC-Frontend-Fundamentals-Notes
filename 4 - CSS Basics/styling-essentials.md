```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Basics: Typography, Text Decoration, Colors, and Units</title>
    <link rel="stylesheet" href="./styling-essentials.css">
    <style>
        html{
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h2>CSS Typography</h2>
    <div class="font-family">Changes font family</div>
    <div class="bold">Changes format to bold</div>
    <div class="italic">Changes format to italic</div>
    <div class="center-align">Centers text</div>
    <div class="line-height">Sets line height</div>
    <div class="letter-spacing">Sets letter spacing</div>
    <div class="text-shadow">Adds text shadow</div>
    <br>
    
    <h2>CSS Text Decoration</h2>
    <div class="underline">Adds underline</div>
    <div class="line-through">Adds line-through</div>
    <a href="#" class="remove-text-decoration">Removes the text decoration</a>
    <br>
    
    <h2>CSS Colors</h2>
    <ul>
        <li class="color-names">Color Names</li>
        <li class="hexadecimal">Hexadecimal(Hex)</li>
        <li class="rgb">RGB/RGBA Values</li>
    </ul>

    <h2>CSS Unit of Measurement</h2>
    <ul style="font-size: 18;">
        <li class="absolute-unit">Absolute Unit (px)</li>
        <li class="relative-unit-em">Relative Unit (em)</li>
        <li class="relative-unit-rem">Relative Unit (rem)</li>
    </ul>
    <br>
  </body>
</html>
```
```css
.font-family {
  font-family: "Arial", sans-serif;
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

.line-through {
  text-decoration: line-through;
}

.remove-text-decoration{
  text-decoration: none;
}

/* COLORS */
.color-names{
  color: white;
  background-color: #ff6347;
}

.hexadecimal {
  /* #RRGGBB, where the RR (red), GG (green) and BB (blue) */
  /* 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F */
  color: #ffa500;
  /* #RRGGBBTT, where the RR (red), GG (green) and BB (blue) */
  /* 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F */
  background-color: #ffa60054;
}

.rgb{
  /* rgb(red, green, blue) */
  color: rgb(184, 10, 232);
  /* rgba(red, green, blue, alpha) */
  background-color: rgba(199, 9, 237, 0.166);
}

/* UNIT OF MEASUREMENT */
.absolute-unit {
  font-size: 20px;
}

.relative-unit-em {
  font-size: 2em;
}

.relative-unit-rem {
  font-size: 3rem;
}
```