import express from 'express';
import bodyParse from 'body-parser';

const app = express();

app.use(bodyParse.json());


app.listen(8000, () => console.log('Listening on port 8000'));
