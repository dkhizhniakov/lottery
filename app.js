const cluster = require('cluster');
const os = require('os');
const AWS = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const expressWs = require('express-ws');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - (min + 1))) + min;
}

function getRandomName() {
    const names = ['Steve', 'Peter', 'Marc', 'Jacob', 'Alex', 'Leo', 'Robert'];
    return names[getRandomInt(0, names.length - 1)];
}

// Code to run if we're in the master process
if (cluster.isMaster) {
    // Count the machine's CPUs
    const cpuCount = os.cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', (worker) => {
        // Replace the terminated workers
        console.log(`Worker ${worker.id} died :(`);
        cluster.fork();
    });
// Code to run if we're in a worker process
} else {
    AWS.config.region = process.env.REGION;

    /*   const sns = new AWS.SNS();
     const dynamoDB = new AWS.DynamoDB();

     const ddbTable = process.env.STARTUP_SIGNUP_TABLE;
     const snsTopic = process.env.NEW_SIGNUP_TOPIC;*/
    const expressWS = expressWs(express());
    const app = expressWS.app;

    app.engine('html', ejs.renderFile);
    app.set('view engine', 'ejs');
    app.set('views', `${__dirname}/views`);
    app.use(express.static('static'));
    app.use(bodyParser.urlencoded({ extended: false }));

    app.ws('/ws', (ws) => {
        ws.on('message', (msg) => {
            ws.send(msg);
        });
    });

    app.get('*', (req, res) => {
        res.render('index.html');
    });

    const aWss = expressWS.getWss('/ws');
    setInterval(() => {
        aWss.clients.forEach((client) => {
            client.send(JSON.stringify({
                type: 'ADD_WINNER',
                data: {
                    product: {
                        id: getRandomInt(1, 3),
                        name: getRandomName(),
                    },
                    user: {
                        name: getRandomName(),
                        avatar: getRandomInt(1, 2),
                    },
                    lot: {
                        winnerTickets: getRandomInt(10, 30),
                        participants: getRandomInt(20, 100),
                    },
                },
            }));
        });
    }, 2000);

    /*  app.post('/signup', function (req, res) {
     var item = {
     'email': { 'S': req.body.email },
     'name': { 'S': req.body.name },
     'preview': { 'S': req.body.previewAccess },
     'theme': { 'S': req.body.theme }
     };

     ddb.putItem({
     'TableName': ddbTable,
     'Item': item,
     'Expected': { email: { Exists: false } }
     }, function (err, data) {
     if (err) {
     var returnStatus = 500;

     if (err.code === 'ConditionalCheckFailedException') {
     returnStatus = 409;
     }

     res.status(returnStatus).end();
     console.log('DDB Error: ' + err);
     } else {
     sns.publish({
     'Message': 'Name: ' + req.body.name + "\r\nEmail: " + req.body.email
     + "\r\nPreviewAccess: " + req.body.previewAccess
     + "\r\nTheme: " + req.body.theme,
     'Subject': 'New user sign up!!!',
     'TopicArn': snsTopic
     }, function (err, data) {
     if (err) {
     res.status(500).end();
     console.log('SNS Error: ' + err);
     } else {
     res.status(201).end();
     }
     });
     }
     });
     });*/

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`);
    });
}