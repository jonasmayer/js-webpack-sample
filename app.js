const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve('build')));

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
