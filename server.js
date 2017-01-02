'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
