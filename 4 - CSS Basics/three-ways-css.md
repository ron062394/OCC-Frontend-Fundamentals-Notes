```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- External Styling -->
    <link rel="stylesheet" href="./three-ways-css.css" />
    <!-- Internal Styling -->
    <style>
      .internal-styling {
        color: red;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <!-- Inline Styling -->
    <p style="color: green; font-size: 16px">
      This is a paragraph with inline styling.
    </p>

    <!-- Internal Styling -->
    <p class="internal-styling">This is a paragraph with internal styling.</p>

    <!-- External Styling -->
    <p class="external-styling">This is a paragraph with external styling.</p>

  </body>
</html>
```

```css
.external-styling {
  color: blue;
  font-size: 18px;
}
```
