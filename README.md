# mypickles_test

## Architecture 

 1. Create a Hook API endpoint to accept the payload from the client.
 2. Set up a database to store the request data.  NoSQL database (MongoDB ).
 3. Integrate with an email delivery service to send the email (SendGrid). 
 4. Send a response to the client as soon as the request is received.Returning an HTTP 200 status code.
 5. Use a message queue / background job processing system to handle storing the data in the database and sending the email without 6.6. blocking the response to the client. This ensures that the service can handle a high volume of requests , remains responsive and   high availability. (https://bullmq.io/)
 7. Implement resiliency measures to ensure that storing the data in the database and sending the email are reliable. Use Queue service.
 8. Use the Publish-Subscribe pattern to implement real-time updates via WebSockets/socket.io. This allows for a responsive and scalable solution for displaying email delivery status updates to the user. 

## Explain any compromises/shortcuts you made due to time considerations
   - Data should insert  in transaction block 

## Getting Started

a. Install npm packages  - node 16+ version

    npm install -g ts-node
    npm i

b. Create a database in Mongo Atlas -https://cloud.mongodb.com/ 

c. Define the database connection string in .env file as stated in .env.example file.

d. SendGrid use as email service to send email create free account and get the api key and configure in environment  variable 

e. Create  free redis account in https://app.redislabs.com/  and create  Redis database and  configure connection string in environment  variable 

   NODE_ENV=DEV
   APP_VERSION='V1.0'
   PORT=3001
   MONGODB_URI=''
   SENDGRID_API_KEY = ''
   SENDGRID_SENDER_EMAIL = ''

First, run the development server:

```bash
npm run dev

Open [http://localhost:3001](http://localhost:3001) with postmen.

 and http://localhost:3001/api/webhook execute post method with example json body
#   " '{
#    "to": "kasunth@gmail.com",
#    "subject": "Test Email - HTML/TEXT",
#    "text": "TEXT",
#    "html": "<h1>HTML</h1>"
#    }'"



