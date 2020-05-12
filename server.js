const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

express()
  .get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  })
  .listen(PORT, () => console.log(`port ${PORT}`));