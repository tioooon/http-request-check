const express = require('express');
const enrouten = require('express-enrouten');
const bodyParser = require('body-parser');

const app = express();
app.listen(3000);

app.use(enrouten({directory: 'routes'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
