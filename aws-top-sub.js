// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({
accessKeyId: 'ACCESSKEYID',
secretAccessKey: 'SECRETACCESSKEY',
region: 'REGION'});


// Create subscribe/email parameters
var params = {
  Protocol: 'PROTOCOL', /* required */
  TopicArn: 'AWS-ARN', /* required */
  Endpoint: 'ENDPOINT',
  ReturnSubscriptionArn: false || true
};

// Create promise and SNS service object
var subscribePromise = new AWS.SNS({apiVersion: '2010-03-31'}).subscribe(params).promise();

// Handle promise's fulfilled/rejected states
subscribePromise.then(
  function(data) {
    console.log("Subscription ARN is " + data.SubscriptionArn);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
