let input =document.getElementById("textInput")
let remaining =document.getElementById("remaining")


function handleInput(){
    let charCount =50-input.value.length;
    remaining.textContent=charCount

}
input.addEventListener("input",handleInput)