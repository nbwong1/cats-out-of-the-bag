//var catApi = "3e14a2d6-4b34-445e-b876-59aaa962b759"
//https://api.thecatapi.com/v1/images/search
var requestUrl = "https://api.thecatapi.com/v1/images/search"

var responseText = document.getElementById('response-text');
function getApi(requestUrl){
    fetch(requestUrl, {
        headers: {
        "Content-Type": "application/json",
        "x-api-key": "3e14a2d6-4b34-445e-b876-59aaa962b759"
    }}).then(function(response){
        console.log(response)
        return response.json()})
        .then(function(data){
            console.log(data[0].url)
            var randomCat = $("#random-cat")
            var imgElement = $("<img>").attr("src", data[0].url).attr("alt", "Random Cat Image")
            randomCat.append(imgElement)
        if(response.status !== null){
            responseText.textContent=response.status;
        }
        return response.json();
    });
}

getApi(requestUrl)