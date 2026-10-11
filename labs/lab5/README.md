# COMP3123 Exercise 05 - Express Routing

Student ID: 101570138

## Run the project

```bash
npm install
node index.js
```

Server: `http://localhost:8081`

## Required routes

- `GET /home`
- `GET /api/v1/user/profile`
- `POST /api/v1/user/login`
- `GET /api/v1/user/logout/:username`

### Valid login body

```json
{
  "username": "bret",
  "password": "bret@123"
}
```

## Section B - Short Answers

### 6. Purpose of `express.Router()`

`express.Router()` creates a modular router that can contain related routes and middleware. It helps keep an Express application organized by moving routes out of the main server file. The router can then be mounted under a common path such as `/api/v1/user`.

### 7. Error Handling in Express.js

Express error-handling middleware uses four parameters: `err`, `req`, `res`, and `next`. Route code can call `next(err)` when an error occurs. A final error-handling middleware can return an appropriate status code and response.

Example:

```javascript
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server Error');
});
```

## Section C - Bonus: Dynamic Port Binding

`app.listen(process.env.port || 8081)` tells Express to use a port supplied by the environment when one is available; otherwise it falls back to port `8081`. This is useful in production because hosting platforms often assign the port dynamically instead of allowing the application to choose a fixed port.

## Screenshots to add before final submission

Place your screenshots in the `screenshots` folder, including:

1. MongoDB Atlas screen after login.
2. `/home` output.
3. `/api/v1/user/profile` Postman output.
4. Valid `/login` Postman output.
5. Invalid username `/login` Postman output.
6. Invalid password `/login` Postman output.
7. `/logout/:username` Postman output.
8. Any error output requested by your professor, if applicable.
