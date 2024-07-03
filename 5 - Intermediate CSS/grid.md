### SEND TEMPLATE LINK TO ZOOM CHAT
```
HTML: https://github.com/ron062394/Bootcamp-Template/blob/main/Intermediate%20CSS/grid.md
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Grid</title>
    <style>
      html {
        font-size: 16px;
      }

      body {
        background-color: #e3d9c1;
      }

      .gridContainer {
        padding: 20px;
      }

      .gridItem {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }

      .gridItem:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    </style>
    <link rel="stylesheet" href="./grid.css" />
  </head>
  <body>
    <div class="gridContainer">
      <div class="gridItem gridItem1">Services</div>
      <div class="gridItem gridItem2">About us</div>
      <div class="gridItem gridItem4">Contact Us</div>
      <div class="gridItem gridItem4">Mission</div>
      <div class="gridItem gridItem5">Vision</div>
      <div class="gridItem gridItem6">Featured Product</div>
      <div class="gridItem gridItem7">Product1</div>
      <div class="gridItem gridItem8">Product2</div>
      <div class="gridItem gridItem9">Product3</div>
    </div>
  </body>
</html>
```

```css
/* Using px */
.gridContainer {
  display: grid;
  grid-template-columns: 560px 500px;
  grid-template-rows: 200px 120px;
}

/* Using auto */
.gridContainer {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 200px 120px;
}

/* Using percentage */
.gridContainer {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 200px 120px;
}

/* Using Fr */
.gridContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 120px;
}

/* Shortcut */
.gridContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 120px;
}

/* Using repeat() */
.gridContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 20px;
}

/* Columns gap */
.gridContainer {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

/* grid area */
.gridItem2 {
  grid-area: 2 / 1 / 2/ 3;
}
/* remove grid area */
.gridItem2 {
  grid-area: auto;
}

/* Media queries */
/* 
    Mobile Devices: Less than 481px
    iPads, Tablets: 481px - 768px
    Small Screens, Laptops: 769px - 1024px
    Desktops, Large Screens: 1025px - 1200px
    Extra Large Screens, TV: 1201px and greater
*/

/* Media Query for Large screens */
@media screen and (min-width: 769px) {
  .gridContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
  }
}

/* Media Query for medium screens */
@media screen and (min-width: 481px) and (max-width: 768px) {
  .gridContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }
}

/* Media Query for Small screens */
@media screen and (max-width: 480px) {
  .gridContainer {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
  .gridItem7 {
    display: none;
  }
  .gridItem8 {
    display: none;
  }
  .gridItem9 {
    display: none;
  }
}
```
