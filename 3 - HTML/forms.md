```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Creating Forms</title>
  </head>
  <body>
    <!-- Form is used to collect user input -->
    <h1>Creating Forms</h1>
    <form action="">
      <div>
        <!-- Name -->
        <!-- for="#element-id" -->
        <label for="name">Name: </label>
        <input
          type="text"
          name="user-fullname"
          id="fullname-id"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <!-- Email -->
        <label for="email">Email: </label>
        <input
          type="email"
          name="user-email"
          id="email-id"
          placeholder="john.doe@gmail.com"
          required
        />
      </div>

      <div>
        <!-- Password -->
        <label for="password">Password: </label>
        <input
          type="password"
          name="user-password"
          id="password-id"
          placeholder="*********"
          required
        />
      </div>

      <div>
        <!-- Number -->
        <label for="age">Age: </label>
        <input
          type="number"
          name="user-age"
          id="age-id"
          placeholder="30"
          required
          min="18"
          max="100"
        />
      </div>

      <label for="message">Message: </label>
      <div>
        <textarea
          name="user-message"
          id="message-id"
          cols="30"
          rows="5"
          placeholder="This is a message."
        ></textarea>
      </div>

      <div>
        <!-- Defines a drop-down list -->
        <label for="gender-id">Gender:</label>
        <select name="user-gender" id="gender-id">
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
        <input
          type="radio"
          name="profile-status"
          id="public-id"
          value="public"
        />
        <label for="public-id">Public</label>
        <input
          type="radio"
          name="profile-status"
          id="private-id"
          value="private"
        />
        <label for="private-id">Private</label>
      </div>

      <div>
        <!-- ZERO or MORE: limited number of choices -->
        <input type="checkbox" name="genre" id="action-id" value="action" />
        <label for="action-id">Action</label>

        <input type="checkbox" name="genre" id="comedy-id" value="comedy" />
        <label for="comedy-id">Comedy</label>

        <input type="checkbox" name="genre" id="drama-id" value="drama" />
        <label for="drama-id">Drama</label>

        <input type="checkbox" name="genre" id="horror-id" value="horror" />
        <label for="horror-id">Horror</label>
      </div>

      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```
