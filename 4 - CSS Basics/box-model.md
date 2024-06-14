```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Padding, Margin and Border</title>
    <link rel="stylesheet" href="./box-model.css">
    <style>
      /* Internal Styles */
      .box {
        background-color: #02474d;
        height: 100px;
        width: 150px;
        color: white;
        font-weight: bolder;
      }
    </style>
  </head>

  <body>
    <h2>Padding</h2>
    <div class="box box1">
      <p>This uses padding.</p>
    </div>

    <h2>Padding Shorthand</h2>
    <div class="box box2">
      <p>This uses the padding shorthand.</p>
    </div>

    <h2>Margin</h2>
    <div class="box box3">
      <p class="parag1">This uses margin.</p>
    </div>

    <h2>Margin Shorthand</h2>
    <div class="box box4">
      <p class="parag2">This uses the margin shorthand.</p>
    </div>

    <h2>Border</h2>
    <div class="mix-borders">
      <p class="my-parag">This is a paragraph.</p>
    </div>

    <h2>Circle Container</h2>
    <div class="circle-container">
      <h2>Hi!</h2>
    </div>
  </body>
</html>
```

```css
.box1 {
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 40px;
}

.box2 {
  padding: 20px;
}

.box3 {
  margin-top: 80px;
  margin-left: 20px;
  margin-right: 30px;
  margin-bottom: 40px;
}

.box4 {
  margin: 20px;
}

h3 {
  width: 300px;
  height: 120px;
  background-color: gray;
  padding: 6px 11px 4px 9px;
  border: 3px solid brown;
}

.mix-borders {
  border-style: dotted dashed solid double;
  border-radius: 10px;
  width: 250px;
}

.circle-container {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
```
