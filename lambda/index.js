import fetch from "node-fetch";
import AWS from "aws-sdk";
AWS.config.update({ region: "eu-north-1" });
const docClient = new AWS.DynamoDB.DocumentClient({ region: "eu-north-1" });

export const handler = async (event) => {

  async function getFact() {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const data = await response.json();
    return data.text;
  }

  async function getExcuse() {
    const response = await fetch("https://excuser.herokuapp.com/v1/excuse");
    const data = await response.json();
    return data[0].excuse;
  }

  async function getOne(mansikka) {

    const params = {
      TableName: "socially-awkward",
      Key: {
        id: mansikka,
      },
    };

    try {
      const data = await docClient.get(params).promise();
      return data;
    } catch (err) {
      return "errori 1: " + err;
    }
  }

  try {
    let num = Math.floor(Math.random() * 7);
    let id = num.toString();
    let fact = await getFact();
    let excuse = await getExcuse();
    let data = await getOne(id);
    const body = {
      "fact": fact,
      "excuse": excuse,
      "reaction": data.Item.name,
      "testi": "halooooo"
    };
    const response = {
      "statusCode": 200,
      "headers": { "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true },
      "body": JSON.stringify(body),
    };
    return response;

  } catch (err) {
    return "error: ", err;
  }
};