const input = document.querySelector("input"); //OK
const container = document.querySelector(".dynamic-divs") //OK

const button = document.querySelector("button");



input.addEventListener("change", buildList);

function buildList(event) {
    const amount = event.target.value;

    container.innerHTML = "";

    for (let i = 1; i <= amount; i++) {
        container.innerHTML += `<div>Number ${i}</div>`;
    }
}


const counterReset = document.getElementById("counter");

function plzreset() {

    document.querySelector(".dynamic-divs").innerHTML = "";
    counterReset.value=0;
}