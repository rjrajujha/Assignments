let unit = document.getElementById("pounds");
let grams = document.getElementById("unit-g");
let kg = document.getElementById("unit-k");
let ounces = document.getElementById("unit-o");

unit.addEventListener("change", () => {
    unitInPound = parseInt(unit.value);
    grams.innerText = unitInPound * 453.592;
    kg.innerText = unitInPound * 0.453592;
    ounces.innerText = unitInPound * 16;
})