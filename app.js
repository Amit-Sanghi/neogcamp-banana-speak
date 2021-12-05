var translate = document.querySelector("#translate")
var txtInput = document.querySelector("#txt-input")
var output = document.querySelector("#output")



function clickEventListener() {
    console.log("clicked!!")
    console.log("input ", txtInput.value)
    output.innerText = "hjgafgiug "+ txtInput.value;

}



translate.addEventListener("click", clickEventListener)