console.log("Starting super complex app");


var accountSid = "ACf6b88838585fab971f2a118e23e09dec"
var authToken = "8668a2dba15e8f6eb03124ffedbaedda"

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Sup dawg',
    to: '+14183762646',
    from: '+15069060224'
})
.then((message) => console.log(message.sid));