let country = document.querySelector("#searchbox").innertext;
console.log(country);
let url = `http://universities.hipolabs.com/search?country=${country}`;
let data = fetch(url);
data
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new error("Network is not respnding");
    }
  })
  .then((d) => {
    console.log(d);
  })
  .catch((error) => {
    console.log(error);
  });
