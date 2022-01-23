let myElement = document.getElementById("myRedElement");
let updateCoordinatesElement = document.getElementById("myBlueElement");
let myElementPosition; 

// let myElementPositionX = myElement.offsetLeft; 
// keep in mind that offsetHeight, offsetLeft, etc., are relative to the nearest POSITIONED PARENT ELEMENT. 
// In this case it will work, but not necessarily in all cases. Please be careful!

myElementPosition = myElement.getBoundingClientRect(); 
// this function returns an object with all details about the box dimensions & offset relative to the window.
// see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect for more details.


// You can add multiple different types of event listeners.
// You can see a full list of HTML DOM Events here:
// https://www.w3schools.com/jsref/dom_obj_event.asp 
document.body.addEventListener("mousemove", e => {

    // console.log(e); 
    // you can always log the event that is sent to this function and view all the data it keeps track of.
    // I've already done that for this example and I know what I'm looking for.
    
    let xPosition = e.x;
    let yPosition = e.y;
    // keep in mind that these two variables are within the scope of the event function and cannot be accessed later, 
    // unless we explicitly create a variable outside of this function and assign the e.x / e.y numbers to that.

    let distanceX = (myElementPosition.left + (myElementPosition.width / 2) )   - xPosition;
    let distanceY = (myElementPosition.top +  (myElementPosition.height / 2) ) - yPosition;

    updateCoordinatesElement.innerHTML = `<p>Distance:<br> x ${Math.round(distanceX)},<br> y ${Math.round(distanceY)}`;
})