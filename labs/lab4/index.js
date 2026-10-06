const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(express.json());

// Serve files from the public folder
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});


// Defaults to Anthony Huete when query parameters are not provided
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Anthony";
  const lastname = req.query.lastname || "Huete";

  res.json({ firstname, lastname });
});

// POST /user/John/Doe
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;

  res.json({ firstname, lastname });
});

// POST /users
// Expects a JSON array of users in the request body
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];

  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
