const express = require('express');
const users = require('./component/users')
const app = express();
app.use(express.json());
const port = 4000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.use('/users',users)
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
