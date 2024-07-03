### SEND TEMPLATE LINK TO ZOOM CHAT
```
HTML: https://github.com/ron062394/Bootcamp-Template/blob/main/Intermediate%20CSS/flexbox.md
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Flexbox</title>
    <style>
      .container {
        height: 400px;
        background-color: #a8dadc;
        position: relative;
        overflow: hidden;
      }

      .flexItems {
        width: 200px;
        margin: 10px;
        border: 6px #457b9d solid;
        border-radius: 12px;
        background-color: #f1faee;
        text-align: center;
        font-size: 40px;
      }

      .cross-axis {
        position: absolute;
        right: 50%;
        height: 1080px;
        width: 6px;
        background-color: #e63946;
      }

      .main-axis {
        position: absolute;
        top: 50%;
        height: 6px;
        width: 2160px;
        background-color: #1d3557;
      }
    </style>
    <link rel="stylesheet" href="./flexbox.css" />
  </head>
  <body>
    <div class="container flexContainer">
      <div class="flexItems flexItem1">1</div>
      <div class="flexItems flexItem2">2</div>
      <div class="flexItems flexItem3">3</div>

      <!-- The axes are for discussion purposes only -->
      <div class="axis main-axis"></div>
      <div class="axis cross-axis"></div>
    </div>
  </body>
</html>
```

```css
/* Apply flexbox layout to the container */
.flexContainer {
  display: flex;
}

/* Set the flex direction to row (default) */
.flexContainer {
  display: flex;
  flex-direction: row;
}

/* Allow flex items to wrap onto multiple lines */
.flexContainer {
  display: flex;
  flex-wrap: wrap;
}

/* Make flex items stretch to fill the container along the cross axis */
.flexContainer {
  display: flex;
  align-items: stretch;
}

/* Flex grow - Willingness to grow */

.flexItem1 {
  flex-grow: 1; /* Takes up 1/6th of the available space */
}

.flexItem2 {
  flex-grow: 2; /* Takes up 2/6th or 1/3rd of the available space */
}

.flexItem3 {
  flex-grow: 3; /* Takes up 3/6th or 1/2 of the available space */
}

/* Flex shrink - Willingness to shrink */

.flexItem1 {
  flex-shrink: 1; /* Default behavior, willing to shrink */
}

.flexItem2 {
  flex-shrink: 0; /* Won't shrink */
}

.flexItem3 {
  flex-shrink: 2; /* More willing to shrink compared to others */
}

/* Set the initial size of flex item 3 */
.flexItem3 {
  flex-basis: 300px;
}
```
