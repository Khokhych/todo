const express = require('express');

const port = 4000;
const app = express();

app.use(express.static(__dirname));
app.listen(port, () => console.log(`Started server at http://localhost:${port}`));