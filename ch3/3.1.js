const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const transfrom = object => Object.keys(object).map(k => `${k}: ${object[k]}`).join('\n');

app.get('/', (req, res) => {
    res.send(transfrom(req.query));
})

app.post('/', (req, res) => {
    res.send(transfrom(req.body));
})

app.put('/', (req, res) => {
    res.send(transfrom(req.body));
})

app.delete('/', (req, res) => {
    res.send(transfrom(req.body));
})

app.listen(port, () => {
    console.log(`listening port ${port}`);
})