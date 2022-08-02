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

      var catFactArray = JSON.parse(localStorage.getItem('catfacts')) || [];
      
      catFactArray.push(data.fact);
      console.log(catFactArray);
      localStorage.setItem("catfacts", JSON.stringify(catFactArray));

      // saves the data.fact within local storage; todo: but need to save it and create list.
      // var catFactStorage = JSON.stringify(data.fact);
      // localStorage.setItem("catfacts", catFactStorage);

      // let newCatFactStorage = catFactStorage[i];

      // localStorage.setItem("catfacts", JSON.stringify(newCatFact));
    });
  // begin code
  // function renderCatFacts() {
  //   catFactList.innerHTML = "";
  //   catFactSpan.textContent = catFacts.length;

  //   for (var i = 0; i < catFacts.length; i++) {
  //     var catFact = catFacts[i];
  //   }
  // }

  // function init() {
  //   var storedCatFacts = JSON.parse(localStorage.getItem("catfacts"));

  //   if (storedCatFacts !== null) {
  //     catFacts = storedCatFacts;
  //   }
  //   renderCatFacts();
  // }

  // function storeCatFacts() {
  //   localStorage.setItem("catfacts", JSON.stringify(catFacts));

  //   storeCatFacts();
  //   renderCatFacts();
  // }
  // end code
}

// #catFactHistory
console.log(catFact);

// save #random-facts in local storage

// blocked out code
