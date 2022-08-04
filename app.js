import fetch from "node-fetch";

async function getAwkward() {
  const response = await fetch(
    "https://cgovdpwab9.execute-api.eu-north-1.amazonaws.com/jee/socially-awkward"
  );

  const data = await response.json();
  // document.getElementById("skripti").innerHTML = `<p>${data}</p>`;
  return data;
}

console.log(await getAwkward());
