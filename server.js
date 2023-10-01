const express = require('express');
const path = require('path');

const app = express();
const port = 3000;  

app.get('/logo.svg', (req, res) => {
  const filePath = path.join(__dirname, 'logo.svg');
  res.setHeader('Content-Type', 'image/svg+xml');  
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
