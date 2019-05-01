

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/


/*
Use the map method to create a new array where the
first letter of each planet is capitalized. Use the
`toUpperCase()` method on strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
Use the filter method to create a new array that
contains planets with the letter 'e'. Use the `includes()`
method on strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
const planetEl = document.getElementById("planets")
console.log("planetEl", planetEl);
*/

let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
console.log("planets", planets);
let planetEl = document.getElementById("planets")
console.log("planetEl", planetEl);

planets.forEach(element => {
    planetEl.innerHTML += `
    <h1>${element}</h1>
    <hr>
    `
})

planets.map(element => {
    let upperPlanet = element.charAt(0).toUpperCase() + element.slice(1);
    planetEl.innerHTML += 
    `<h1>${upperPlanet}</h1>
    <hr>`
})

planets.filter(element => {
    let planetE = element.includes("e");
    if (planetE) {

     planetEl.innerHTML += 
    `<h1>${element}</h1>
    <hr>`
    }
})




