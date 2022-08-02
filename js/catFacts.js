var factRequestUrl = "https://catfact.ninja/fact";
var catFact = $("random-facts");
//var obj = JSON.parse(response);

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
      // saves the data.fact within local storage; todo: but need to save it and create list.
      var catFactStorage = JSON.stringify(data.fact);
      localStorage.setItem("catfacts", catFactStorage);
    })
   

  }

// #catFactHistory
console.log(catFact);

// save #random-facts in local storage
