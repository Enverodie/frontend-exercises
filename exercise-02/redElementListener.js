const instructionString = "Track distance to this element";

let myElement = document.getElementById("myRedElement");
let updateCoordinatesElement = document.getElementById("myBlueElement");
let myElementPosition;
let cursorPositionX, cursorPositionY;
let distanceX, distanceY; // distance to active element (declared by default to prevent weirdness)

// let myElementPositionX = myElement.offsetLeft; 
// keep in mind that offsetHeight, offsetLeft, etc., are relative to the nearest POSITIONED PARENT ELEMENT. 
// In this case it will work, but not necessarily in all cases. Please be careful!

myElementPosition = myElement.getBoundingClientRect();
// this function returns an object with all details about the box dimensions & offset relative to the window.
// see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect for more details.


// Helper functions

function switchElement() {
    let tempElement = myElement;
    myElement = updateCoordinatesElement;
    updateCoordinatesElement = tempElement;
    updateDistance();
}

function updateDistance() {
    distanceX = (myElementPosition.left + (myElementPosition.width / 2)) - cursorPositionX;
    distanceY = (myElementPosition.top + (myElementPosition.height / 2)) - cursorPositionY;

    updateText();
}

function updateText() {
    updateCoordinatesElement.innerHTML = `<p>Distance:<br> x ${Math.round(distanceX)},<br> y ${Math.round(distanceY)}`;
    myElement.innerText = instructionString;
}


// You can add multiple different types of event listeners.
// You can see a full list of HTML DOM Events here:
// https://www.w3schools.com/jsref/dom_obj_event.asp 

myElement.addEventListener('click', () => switchElement());
updateCoordinatesElement.addEventListener('click', () => switchElement())

document.body.addEventListener("mousemove", e => {

    // console.log(e); 
    // you can always log the event that is sent to this function and view all the data it keeps track of.
    // I've already done that for this example and I know what I'm looking for.
    cursorPositionX = e.x;
    cursorPositionY = e.y;

    updateDistance();

})