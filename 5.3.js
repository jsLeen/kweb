const express = require("express");
const { runQuery } = require("./database");
const app = express();
const port = 3000;

app.get('/fare', async (req, res) => {
    try {
        const { uid } = req.query;
        const sql = 'select users.name, sum(round(fare_rate * distance / 1000, -2)) as totalFare ' +
        'from users inner join tickets on users.id = tickets.user and users.id = ? inner join trains on tickets.train = trains.id inner join types on trains.type = types.id';
        const { name, totalFare } = (await runQuery(sql, [uid]))[0];
        return res.send(`${name}'s total fare =  ${totalFare} KRW.`);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

app.get('/train/status', async (req, res) => {
    try {
        const { tid } = req.query;
        const sql = 'select count(*) as occupied, max_seats as maximum ' +
        'from tickets inner join trains on tickets.train = trains.id and trains.id = ? inner join types on trains.type = types.id';
        const { occupied, maximum } = (await runQuery(sql, [tid]))[0];
        return res.send(`Train ${tid} : ${occupied < maximum ? 'not ' : ''}sold out`);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})