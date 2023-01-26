let mockData;
let isDataFetched = false;
let currentData;

fetch("./data.json")
    .then((data) => {
        return data.json();
    })
    .then((e) => {
        mockData = e;
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        isDataFetched = true;
    })

let submit = document.getElementById("submit");

let region = document.getElementById("region");
let male = document.getElementById("male");
let female = document.getElementById("female");
let surname = document.getElementById("surname");

submit.addEventListener("click", () => {
    if (region.value == '') return;
    currentData = undefined;
    if (!isDataFetched) {
        alert("Data is not Fetched");
        return;
    }
    mockData.forEach(element => {
        if (element.region.toLowerCase() == region.value.toLowerCase()) {
            currentData = element
        }
    })
    if (currentData === undefined) {
        alert("Country not Found");
    }
    else {
        checkPeople(male.value, female.value, surname.value)
    }
})

let people = document.getElementById("person");
function checkPeople(m, f, s) {
    let person = {}
    if (m !== '') {
        currentData.male.forEach((e) => {
            if (e.toLowerCase() == m.toLowerCase()) {
                person.male = m;
            }
        })
    }
    if (f !== '') {
        currentData.female.forEach((e) => {
            if (e.toLowerCase() == f.toLowerCase()) {
                person.female = f;
            }
        })
    }
    if (s !== '') {
        currentData.surnames.forEach((e) => {
            if (e.toLowerCase() == s.toLowerCase()) {
                person.surname = s;
            }
        })
    }
    if (Object.keys(person).length !== 0) {
        people.innerHTML = `
        <p> People Found </p>
        <p>Name ${person.male || person.female || " "} ${person.surname || " "} </p>
        `
    }
    else if( m === "" && f === "" && s === "") people.innerHTML = ``
    else {
        people.innerHTML = `
        <p> People Not Found </p>
        `
    }
}