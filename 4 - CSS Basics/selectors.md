```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Selector Samples</title>
    <link rel="stylesheet" href="selectors.css" />
  </head>
  <body>
    <!-- Element Selector -->
    <span>This is styled using an element selector.</span>

    <!-- Class Selector -->
    <p class="class-name">This is styled using a class selector.</p>
    <p class="class-name">This is styled using a class selector.</p>

    <!-- ID Selector -->
    <p id="id-name">This is styled using an ID selector.</p>

    <!-- Universal Selector -->
    <div>This is styled using a universal selector.</div>
    <p>This is also styled using a universal selector.</p>

    <!-- Grouping Selector -->
    <h1>Welcome to My Website</h1>
    <p class="parag">This is a paragraph of text.</p>
    <h2>About Me</h2>
    <p class="parag">This is another paragraph of text.</p>
    <br /><br /><br />

    <!-- Descendant Selector -->
    <div class="ancestor">
      <p>This is styled using a descendant selector.</p>
    </div>

    <!-- Pseudo-classes -->
    <a href="#" class="link">This is styled using a pseudo-class.</a>
  </body>
</html>
```

```css
/* Element Selector */
span {
  background-color: green;
  color: white;
  font-size: 18px;
}

/* Class Selector */
.class-name {
  color: red;
  background-color: pink;
}

/* ID Selector */
#id-name {
  font-weight: bold;
}

/* Universal Selector */
* {
  font-family: Arial, sans-serif;
}

/* Grouping Selector */
h1,
h2,
.parag {
  color: orange;
}

/* Descendant Selector */
.ancestor p {
  font-style: italic;
  color: green;
}

/* Pseudo-classes */
/* Modify the special state of an element */
a:hover {
  color: red;
}
```
Optional:
```css
/* Attribute Selector */
a[target="_blank"] {
  background-color: yellow;
}

/* Pseudo-classes */
a:link {
  color: green;
}

a:active {
  color: yellow;
}

/* Once you visit the page it will always be pink. */
/* It will only be gone once you clear your browsing history. */
a:visited {
  color: pink; 
}
```
