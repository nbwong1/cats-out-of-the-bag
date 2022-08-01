//var catApi = "3e14a2d6-4b34-445e-b876-59aaa962b759"
//https://api.thecatapi.com/v1/images/search
var requestUrl = "https://api.thecatapi.com/v1/images/search"
var meowButton = $("#Meow-button")

meowButton.on("click", handleButtonClick)
function handleButtonClick(){
    geoSearch();
}
function geoSearch() {
    
        fetch(requestUrl, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "3e14a2d6-4b34-445e-b876-59aaa962b759"
            }
        }).then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (data) {
        catgenerator(data);
            })}
//var responseText = document.getElementById('response-text');
            function catgenerator(data){
                     console.log(data[0].url)
            var randomCat = $("#random-cat")
            var imgElement = $("<img>").attr("src", data[0].url).attr("alt", "Random Cat Image")
            randomCat.append(imgElement)
            // if (response.status !== null) {
            //         responseText.textContent = response.status;
            // }
        }
        
       
 // event listener for button sound

 $('document').ready(function () {
    $('#Meow-button').click(function () {
        var audio = {};
        audio["walk"] = new Audio();
        audio["walk"].src = ""
        audio["walk"].addEventListener('load', function () {
            audio["walk"].play();
        });
    });
});   