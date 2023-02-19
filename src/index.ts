
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config'
import { dbConnection } from './config/database'
import Email from './models/Email'

const app = express();
const port = process.env.PORT || 3000;

// middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/v', (req, res) => {
  res.send(`App Version: ${process.env.APP_VERSION}`);
});


// hook endpoint
app.get('/api/hook', async (req, res) => {
  const emailBody = { to:'to', subject: 'subject', text: 'text',  html: 'html'};
  const newEmail =  await new Email(emailBody).save();
  res.sendStatus(200)
;
});

const start = async () => {
  try {
    await dbConnection;
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// const app = express();
// const port = process.env.PORT || 3000;

// // middleware setup
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // hook endpoint
// app.post('/api/hook', (req, res) => {
//   console.log('Received payload:', req.body);
//   res.sendStatus(200);
// });

// // start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
