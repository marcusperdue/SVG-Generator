const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'lib' directory
app.use(express.static(path.join(__dirname, 'examples')));
app.use(express.static(path.join(__dirname, 'lib')));
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
