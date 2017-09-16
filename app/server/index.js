const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

const port = 3000;
app.listen(port, () => {console.log(`Server listening ${port.toLocaleString()} leagues under the sea...`)});
