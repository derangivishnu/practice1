const accountSid = 'ACf3910dd6052eb71218eaf493e22c9c04';
const authToken = '128d5d763a1f853e2795c5cbf084e8bd';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'hi vishnu how are you man',
        from: '+15739833365',
        to: '+919704397718'
    })
    .then(message => console.log(message.sid))
    .done();