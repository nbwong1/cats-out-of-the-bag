var factRequestUrl = "https://catfact.ninja/fact";
var catFact = $("random-facts")

console.log(factRequestUrl);
meowButton = $("#Meow-button");
meowButton.on("click", handleButtonClick);

function handleButtonClick() {
  fetch(factRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $("#random-facts").text(data.fact)
    });
}
console.log(catFact)