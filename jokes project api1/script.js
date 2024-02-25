let url = "https://official-joke-api.appspot.com/random_joke";
let data = fetch(url);
data
  .then((d) => {
    if (d.ok) {
      return d.json();
    } else {
      throw new Error("Network responding is working");
    }
  })
  .then((d) => {
    let card = document.querySelector(".card");
    console.log(d);
    let jokeid = d.id;
    let joke = d.setup;
    let punchline = d.punchline;
    // console.log(joke, punchline);

    ihtml = `
    <h2 class="MainJoke">${joke}</h2>
    <h3 class="JokePunchLine">${punchline}</h2>
    `;
    card.innerHTML = ihtml;
  });
