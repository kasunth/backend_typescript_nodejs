
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config'
import  dbConnection  from './config/database'
import router from './routes/router';

const app = express();
const port = process.env.PORT || 3000;

// middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app router
app.use('/', router);

const start = async () => {
  try {
    await dbConnection.initialize();
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

