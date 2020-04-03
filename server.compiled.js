const express = require('express');

const path = require('path');

const PORT = process.env.HTTP_PORT || 8081;
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/intro', (req, res) => {
  res.json({
    name: 'Bing-Jyue',
    studentid: 'r08942078'
  });
});
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
