# Group 1 - Serverless Project
*Week 8 project for AW Academy's AWS Developer Programme*

### Requirements

* Use the following serverless AWS services:
  * Lambda
  * API Gateway
  * DynamoDB
* Use at least one other serverless AWS service:
  * We chose an S3 bucket and the AWS Simple Notification Service
* Retrieve data from at least two different external APIs and offer the information to the user through our own API

### Description

  From the Lambda folder you can find all the AWS Lambda scripts used to create an API.
  The API combines data from two external APIs as well as our DynamoDB database.
  Links to the external APIs we used:
* [Random Useless Facts](https://uselessfacts.jsph.pl/)
* [Excuser API](https://excuser.herokuapp.com/)

  In the root folder you'll find a simple JS app that makes a call to our API. The app returns the result so that it can be used in the html. The app and html were then uploaded to an S3 bucket and published (temporarily) as a static HTML page that calls the Lambda throuh an API Gateway.
