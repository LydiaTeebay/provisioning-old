// External dependencies
const express = require('express');
const router = express.Router();


// connect to Notify

/* // Create new variables
const notify = require('notifications-node-client').NotifyClient;
const request = require('request');

// Notify integration
const notifyClient = new notify(process.env.NOTIFYAPIKEY); */


/* router.post('/createaccount/v1/createaccount/setup/verification', function (req, res) {
    console.log('method called');
    // if(req.body.phoneNumber === '07791463997'){
    notifyClient.sendSms('42016552-237d-40ef-9ced-c4f3a4b20aad', req.body.phoneNumber)
      .then(function (response) {
        console.log('success')
        res.redirect('/createaccount/v1/setup/otp');
      }).catch(function (error) {
        console.log('notify-error' + error)
        res.redirect('/createaccount/v1/setup/otp');
      });
    // }
    //res.redirect('/set-up/v4/register-enter-OTP');
  }); */

// Add your routes here - above the module.exports line

module.exports = router;

