import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

// middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// hook endpoint
app.post('/api/hook', (req, res) => {
  console.log('Received payload:', req.body);
  res.sendStatus(200);
});

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
