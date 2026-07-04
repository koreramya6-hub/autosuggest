const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    image: "./images/jane.png"
  },
  {
    name: "John Doe",
    gender: "Male",
    image: "./images/john.png"
  }
];

let curUserId = 0;

function toggle() {
  if (curUserId == 0)
    curUserId = 1;
  else
    curUserId = 0;

  // Image
  document.getElementById("img").src = users[curUserId].image;

  // Name
  document.getElementById("card-name").innerText = users[curUserId].name;

  // Gender
  document.getElementById("card-gender").innerText = users[curUserId].gender;
}

function getRandomUser() {
  fetch("https://randomuser.me/api")
    .then(function (data) {
      return data.json();
    })
    .then(function (parsedData) {

      let gender = parsedData.results[0].gender;
      let first = parsedData.results[0].name.first;
      let last = parsedData.results[0].name.last;
      let name = first + " " + last;
      let imageUrl = parsedData.results[0].picture.large;

      document.getElementById("card-gender").innerText = gender;
      document.getElementById("card-name").innerText = name;
      document.getElementById("img").src = imageUrl;
    });
}