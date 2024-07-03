### SEND TEMPLATE LINK TO ZOOM CHAT
```
HTML: https://github.com/ron062394/Bootcamp-Template/blob/main/Intermediate%20CSS/centering-methods.md
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Centering Methods</title>
    <style>
      /* Internal CSS */
      .flex-container {
        height: 200px;
        background-color: lightgray;
        margin-bottom: 20px;
      }

      .grid-container {
        height: 200px;
        background-color: lightgray;
        margin-bottom: 20px;
      }

      .centered-div {
        width: 200px;
        height: 100px;
        background-color: lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
    <link rel="stylesheet" href="./centering-methods.css" />
  </head>
  <body>
    <div class="flex-container">
      <div class="centered-div">Flex Container</div>
    </div>

    <div class="grid-container">
      <div class="centered-div">Grid Container</div>
    </div>
  </body>
</html>
```

```css
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-container {
  display: grid;
  place-items: center;
}
```
