import fetch from "node-fetch";

async function getAwkward() {
  const response = await fetch(
    "https://cgovdpwab9.execute-api.eu-north-1.amazonaws.com/beta/socially-awkward"
  );
  const data = await response.json();
  return data;
}

let fact = await getAwkward();

console.log(fact);
