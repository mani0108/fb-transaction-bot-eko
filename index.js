'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
var User = require('./isadas');
const app = express()

app.set('port', (process.env.PORT || 5000))

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES

app.get('/', function(req, res) {
	res.send("Hi I am a chatbot")
})

let token = "EAALqZAEaN3XIBAHVrWBBrYozZADS6NCSfmOVVaZBtTmicZB2LyD0k521JPltEZCSYXQoVIRfiqIaGvMMZCjOZCXVC8pv5MZB7tY4BO48h1YZBrYXIPgXQYaF6azfboeS4nVw0gyQ7z7zpmlpTdEbYwbSxjaktX3KB7bjo3s89X9rLF9e5SKzrVahZA"

// Facebook

app.get('/webhook', function(req, res) {
	if (req.query['hub.verify_token'] === "testing") {
		res.send(req.query['hub.challenge'])
		console.log(res);
	}
	else res.send("Wrong token")
})






app.post('/webhook', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		if(event.message&&event.message.text&&sender!='798041853705514'){
			var test = new User({
			  name: sender
			});
			// call the built-in save method to save to the database
			test.save(function(err) {
			  if (err) throw err;

			  console.log('User saved successfully!');
			});
		}
		if (event.message && event.message.text) {
			let text = event.message.text
			sendText(sender,  text.substring(0, 100))
		}
	res.sendStatus(200);
}
})



function sendText(sender, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json: {
			recipient: { id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}

app.listen(app.get('port'), function() {
	console.log("running: port");
})
