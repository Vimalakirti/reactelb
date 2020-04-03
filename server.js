const express = require('express');

const PORT = process.env.HTTP_PORT || 4001;
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/intro', (req, res) => {
    res.json({
        name: 'Bing-Jyue',
        studentid: 'r08942078',
    });
});


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});
