const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.redirect('https://otters.httpstudio.tech');
});

app.listen(80, () => {
  console.log('[APP] Ready!')
})
