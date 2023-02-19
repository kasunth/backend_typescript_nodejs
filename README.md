# mypickles_test




Architecture 

 Create a Hook API endpoint to accept the payload from the client.
Set up a database to store the request data. You can use a relational database such as MySQL or PostgreSQL or a NoSQL database such as MongoDB or Cassandra.
Integrate with an email delivery service to send the email. There are many email delivery services available, such as SendGrid, Mailchimp, and Amazon SES.
Send a response to the client as soon as the request is received. You can do this by returning an HTTP 200 status code.
Use a message queue or background job processing system to handle storing the data in the database and sending the email without blocking the response to the client. This ensures that the service can handle a high volume of requests and remains responsive.
Implement resiliency measures to ensure that storing the data in the database and sending the email are reliable. For example, you can retry failed requests or use circuit breakers to prevent cascading failures.



## Getting Started

a. Install npm packages
   -- npm install -g ts-node
   -- npm i
b. Create a database in Mongo Atlas -https://cloud.mongodb.com/ 

c. Define the database connection string in .env file as stated in .env.example file.

d. SendGrid use as email service to send email create free account and get the api key and configure in environment  variable 

e. Create  free redis account in https://app.redislabs.com/  and create  Redis database and  configure connection string in environment  variable 

First, run the development server:

```bash
npm run dev

Open [http://localhost:3001](http://localhost:3001) with postmen.

 and http://localhost:3001/api/webhook execute post method with example json body
#   " '{
#    "to": "kasun@ideabits.se",
#    "subject": "Test Email - HTML/TEXT",
#    "text": "TEXT",
#    "html": "<h1>HTML</h1>"
#    }'"



