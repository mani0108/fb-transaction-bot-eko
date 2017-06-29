# ekotransaction


One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

you need a install a nodejs running on your machine 
a mongodb , mlab provides a free mongo database as a service on aws



### Installing

A step by step series of env running

install node6x version which is LTS

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs
```

And go to facebook devlopers and make a page 
url to visit :https://developers.facebook.com/ 
login and get webhook enabled

## Running the tests
```
npm install
npm start
```
 

### have a running instance of node and pass the webhook url to facebook 
* [Ngrok](https://ngrok.com/download) - tunneling the webhost

```
ngrok http 8000 
```



