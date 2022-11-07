const express = require('express');
const app = express();
const port = 3000;

const fact = num => {
    let result = 1;
    for (let i=num; i>=1;i--) {
        result *= i;
    }
    return result;
}

app.get('/factorial', (req, res) => {
    const {number} = req.query;
    res.redirect(`/factorial/${number}`);
})

app.get('/factorial/:number', (req, res) => {
    let {number} = req.params;
    number = parseInt(number);
    res.send(`${fact(number)}`);
})

app.listen(port, () => {
    console.log(`listening port ${port}`);
})