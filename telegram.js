const input = document.getElementById("telegram");
const convert = document.getElementById("convertSentence");
const output = document.getElementById("output");

convert.addEventListener("click", ()=>{
    output.innerText = input.value;
});