let url = "https://randomuser.me/api/";
let data = fetch(url);
// console.log(data);
let card = document.querySelector(".card");
data
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new error("Network not respomding");
    }
  })
  .then((d) => {
    console.log(d);
    console.log(d.results[0]);

    // gerder
    let gender = d.results[0].gender;
    console.log(gender);

    // name
    let tittle = d.results[0].name.title;
    let first = d.results[0].name.first;
    let last = d.results[0].name.last;
    let FullName = `${tittle} ${first} ${last}`;
    console.log(FullName);

    // email
    const email = d.results[0].email;
    console.log(email);

    // contact
    const contact = d.results[0].phone;
    console.log(contact);

    // date of birth
    let age = d.results[0].dob.age;
    console.log(age);

    // profile picture
    let profilePic = d.results[0].picture.large;
    console.log(profilePic);

    // address

    let city = d.results[0].location.city;
    let country = d.results[0].location.country;
    let state = d.results[0].location.state;
    let street = d.results[0].location.street.number;
    let streetName = d.results[0].location.street.name;

    const address = `${street} ${streetName} ${city} ${state} ${country}`;

    console.log(address);

    const ihtml = `
    <div class="profilepic">
      <img src="${profilePic}" alt="profile">
    </div>
    <div class="detail">
      <p>
        <span>Name:</span> ${FullName}<br>
        <span>Gender:</span> ${gender}<br>
        <span>Contact:</span> ${contact}<br>
        <span>Email:</span> ${email}<br>
        <span>Age:</span> ${age}<br>
        <span>Address:</span> ${address}<br>
      </p>
    </div>
    `;
    console.log(ihtml);
    card.innerHTML = ihtml;
  });
