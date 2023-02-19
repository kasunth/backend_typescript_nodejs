
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config'
import  dbConnection  from './config/database'
import router from './routes/router';


                               


const app = express();
const port = process.env.PORT || 3000;

// socket io server configuration
import * as http from 'http';

import { Server } from 'socket.io';
const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});


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

//  Run the queue services
if (process.env.NODE_ENV !== "test") {
  require("./workers/insertDataWorker");
  require("./workers/sendEmailWorker");
}


start();

// initiate socket io server
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3002, () => {
  console.log('listening on *:3002');
});

