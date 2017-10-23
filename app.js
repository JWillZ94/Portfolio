const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(index);
});

app.listen(3000, () => {
  console.log('you good fam');
});
