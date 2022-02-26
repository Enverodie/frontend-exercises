const counterDiv = document.getElementById('counter');
const minTimeout = 20; // in milliseconds. 20 was the most reliable minimum I could find
let counterColors = new Array(Date.now().toString().length).fill(0);

function displayCurrentUnixTime() {

    setTimeout(() => {
        let p = document.getElementById("minutesDisplay");

        let dateString = Date.now().toString();

        let changed = numberDeltaIndices(dateString);
        
        // set changed colors to new values
        let deltaDateString = Array(p.innerText.length).fill('&nbsp;');
        const rateOfIncrease = 255/10;
        for (index of changed) {
            counterColors[index] = Math.min(counterColors[index]+rateOfIncrease, 255);
            
            deltaDateString[index] = dateString[index];
            // we have to use &nbsp; instead of a regular space because of how browsers render whitespace. https://stackoverflow.com/questions/32970636/how-to-repeat-whitespace
            // because we're using this special HTML character, we also have to insert this using innerHTML instead of innerText.

        }
        deltaDateString = deltaDateString.join("");
        // create html string representing new color settings
        let colorString = dateString
            .split('') // we need to convert this string to an array to use the map function
            .map((number, index) => { // another way of looping
                return `<span style="color:rgb(${counterColors[index]}, 0, 0)">${number}</span>`
            })
            .join("");
        // p.innerText = dateString;
        p.innerHTML = colorString;

        let newElement = document.createElement('p');
        newElement.innerHTML = deltaDateString;
        p.insertAdjacentElement("beforebegin", newElement);
        counterDiv.insertAdjacentElement('afterbegin', newElement);

        // then we start deleting elements so things don't get out of hand
        while (counterDiv.childElementCount > 20) counterDiv.removeChild(counterDiv.lastChild);

        // dateString.length
        displayCurrentUnixTime();
    }, minTimeout)
    // 20 was the smallest reliable setTimeout that I know of using this algorithm
}

displayCurrentUnixTime(); // to get it started

// returns a list of indices that have changed from the previous increment
function numberDeltaIndices(string) {
    const alwaysChanging = Math.floor(Math.log10(minTimeout));

    let val = parseInt(string);
    let previousInt = val - minTimeout;
    let previous = previousInt.toString();
    let changed = [];
    for (let i = 0; i < string.length - alwaysChanging; i++) {
        if (string[i] != previous[i]) changed.push(i);
    }
    for (let i = 1; i <= alwaysChanging; i++) {
        changed.push(string.length-i)
    }
    console.log(string, changed);
    return changed;
}
