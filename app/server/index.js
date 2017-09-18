const express = require('express');
const bodyParser = require('body-parser');
const ic = require('./controllers/items_controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

const itemsUrl = '/api/items';
app.post(itemsUrl, ic.create);
app.get(itemsUrl, ic.read);
app.put(`${itemsUrl}/:index`,ic.update);
app.delete(`${itemsUrl}/:index`,ic.delete);

const port = 3000;
app.listen(port, () => {console.log(`Server listening ${port.toLocaleString()} leagues under the sea...`)});
