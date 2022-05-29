console.log("oo");
document.getElementById("urlOnto").value =
  "https://onto4all.repesq.ufjf.br/owlapi/webapi/ontology/valid";

function getUrl() {
  let url = document.getElementById("urlOnto").value;
  return url;
}

function fetchForAll1() {
  (async () => {
    const rawResponse = await fetch(getUrl(), {
      method: "POST",
      headers: {
        Accept: "text/plain, */*",
        "Content-Type": "text/plain",
      },
      body: '({ a: 1, b: "Textual content" })',
    });
    const content = await rawResponse.text();
    console.log(content);
  })();
}

function fetchForAll2() {
  fetch(getUrl(), {
    method: "POST",
    headers: {
      Accept: "text/plain, */*",
      "Content-Type": "text/plain",
    },
    body: '{ a: 7, str: "Some string teste" }',
  })
    .then((res) => res.text())
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
}

function fetchForAll3() {
  fetch(getUrl(), {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: '{ a: 7, str: "Some string teste" }',
  })
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((erro) => console.log(erro));
}

async function fetchForAll4() {
  // *starred options in comments are default values
  const response = await fetch(getUrl(), {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "same-origin", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "text/plain", // sent request
      Accept: "text/plain", // expected data sent back
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: "( dados, etc.. )", // body data type must match "Content-Type" header
  });
  return response.text(); // parses JSON response into native JavaScript objects
}

function fetchForAll41() {
  fetchForAll4()
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((erro) => console.log(erro));
}
