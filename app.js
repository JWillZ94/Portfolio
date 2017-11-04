const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser({extended: false}));

// app.use(cors());  Enables cross-origin resource sharing middleware to be used

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(index);
});

app.listen(3000, () => {
  console.log('you good fam');
});
