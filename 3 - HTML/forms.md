```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Creating Forms</title>
  </head>
  <body>
    <h1>Creating Forms</h1>
    <form action="">
      <div>
        <!-- Name -->
        <label for="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <!-- Email -->
        <label for="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="john.doe@gmail.com"
          required
        />
      </div>

      <div>
        <!-- Password -->
        <label for="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
          required
        />
      </div>

      <div>
        <!-- Number -->
        <label for="age">Age: </label>
        <input type="number" name="age" id="age" placeholder="30" required />
      </div>

      <label for="message">Message: </label>
      <div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Lorem ipsum dolor sit amet consectetur."
        ></textarea>
      </div>

      <div>
        <label for="gender">Gender:</label>
        <select name="gender" id="gender">
          <option value="none" selected disabled hidden>
            --- Select your Gender ---
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div>
        <!-- ONE: limited number of choices -->
        <input type="radio" name="status" id="public" value="public" />
        <label for="public">Public</label>
        <input type="radio" name="status" id="private" value="private" />
        <label for="private">Private</label>
      </div>

      <div>
        <!-- ZERO or MORE: limited number of choices -->
        <input type="checkbox" name="action" id="action" value="action" />
        <label for="action">Action</label>

        <input type="checkbox" name="comedy" id="comedy" value="comedy" />
        <label for="comedy">Comedy</label>

        <input type="checkbox" name="drama" id="drama" value="drama" />
        <label for="drama">Drama</label>

        <input type="checkbox" name="horror" id="horror" value="horror" />
        <label for="horror">Horror</label>
      </div>

      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```
