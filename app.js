
const response = await fetch("https://cgovdpwab9.execute-api.eu-north-1.amazonaws.com/testi/testi");

const data = await response.json();
// muokkaa alla olevaa tulostetta sen mukaan millainen oman apin rakenne on 
document.getElementById("skripti").innerHTML = `<p>Excuse: "${data.excuse}"<br /><br />Random fact: "${data.fact}"<br /><br />Suggested reaction: "${data.reaction}"</p>`;

console.log(data);

// Jos saat CORS-herjaa selaimessa, tsekkaa API-Gatewaystä, että CORS on Enabled. 
// Myös alkuperäistä lambdaa tulee muokata niin, että response on jotain tämän kaltaista:
//
// const response = {
//   "statusCode": 200,
//   "headers": { "Access-Control-Allow-Origin" : "*", 
//   "Access-Control-Allow-Credentials" : true },
//   "body": JSON.stringify(body),
// };