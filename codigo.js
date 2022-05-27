console.log("oo");
document.getElementById("urlOnto").value = "https://onto4all.repesq.ufjf.br/owlapi/webapi/ontology/valid";

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
      body: '{ a: 7, str: "Some string teste" }' ,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }
  
  function fetchForAll3() {
    fetch(getUrl(), {
      method: "POST",
      headers: {"Content-Type":"text/plain"}, 
      body: ('{ a: 7, str: "Some string teste" }'),
    })
      .then((response) => response.text())
      .then((text) => console.log(text))
      .catch((erro) => console.log(erro));
  }
  