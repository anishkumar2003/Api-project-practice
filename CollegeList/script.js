let country = document.querySelector("#searchbox");
let bydefault = "india";

function display() {
  const displaymenu = document.querySelector(".display");
  displaymenu.innerHTML = null;
  let url = `http://universities.hipolabs.com/search?country=${
    country.value ? country.value : bydefault
  }`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network is not responding");
      }
    })
    .then((d) => {
      if (d.length === 0) {
        displaymenu.innerHTML = `<h1>Data Not Found</h1>`;
      } else {
        d.forEach((item) => {
          let html = `
            <div class="dcard">
                <h3>College Name: ${item.name} </h3>
                <h4>State: ${item["state-province"]}</h4>
                <h5>Web Site: <a href="${item.web_pages[0]}" target="_blank"> ${item.web_pages[0]}</a></h5>
            </div>
          `;
          displaymenu.innerHTML += html;
        });
      }
    })
    .catch((error) => {
      console.error(error);
      displaymenu.innerHTML = `<h1>Error Fetching Data</h1>`;
    });
}

function handleEnter(event) {
  if (event.keyCode === 13) {
    display();
  }
}

display();
country.addEventListener("keyup", handleEnter);
