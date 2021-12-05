var translate = document.querySelector("#translate")
var txtInput = document.querySelector("#txt-input")



function clickEventListener() {
    console.log("clicked!!")
    console.log("input ", txtInput.value)

}



translate.addEventListener("click", clickEventListener)