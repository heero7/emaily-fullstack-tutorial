// import Express library
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'Our greeting!', id: 1234});
});

// dynamically listen what port we need to set it to
// if in a development environment, assign it use 5000
const PORT = process.env.PORT || 5000;

//listening on PORT: 5000
app.listen(PORT);