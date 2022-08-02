var factRequestUrl = "https://catfact.ninja/fact";
var catFact = $("random-facts");
var catFactList = $("#cat-fact-list");
var catFactSpan = $("#cat-fact-span");

// global variable where we will store all response.json
const catFacts = [];

console.log(factRequestUrl);
meowButton = $("#Meow-button");
meowButton.on("click", handleButtonClick);

function handleButtonClick() {
  $("#random-cat").empty();
  fetch(factRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $("#random-facts").text(data.fact);
// check if this is an array, if data is already saved to local storage
      var catFactArray = JSON.parse(localStorage.getItem('catfacts')) || [];
      // push new data to local storage
      catFactArray.push(data.fact);
      console.log(catFactArray);
      localStorage.setItem("catfacts", JSON.stringify(catFactArray));

    });
}

// #catFactHistory
console.log(catFact);
