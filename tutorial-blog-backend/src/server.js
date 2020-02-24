import express from 'express';
import bodyParse from 'body-parser';

const app = express();

app.use(bodyParse.json());

app.get('/hello', (req, res) => res.send('Hello get'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

app.listen(8000, () => console.log('Listening on port 8000'));
