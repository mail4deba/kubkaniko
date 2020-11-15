const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('How are you doing Visit: 3');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
