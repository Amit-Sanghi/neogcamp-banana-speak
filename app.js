var translate = document.querySelector("#translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"
//for groot api use below url
//https://api.funtranslations.com/translate/groot.json



function getTranslation(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured",error)
    alert("something went wrong")

}

function clickEventListener() {
    console.log("clicked!!")
    var inputText = txtInput.value

    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)

}



translate.addEventListener("click", clickEventListener)