const canvasContainer = document.getElementById("canvasContainer");
const canvas = document.getElementById("canvas");

function canvasObjects() {
    this.items = [];
}

// function drawAll() {
//     a.draw();
// }

// "Tell" the canvas how large it needs to be
function getCanvasSize() {
    console.log("called");
    canvas.width  = 0; // we need this to be 0 so the container isn't influenced by the contents of the container
    let dimensions = canvasContainer.getBoundingClientRect();
    canvas.width  = dimensions.width;
    canvas.height = dimensions.height;
    // we then need a function call to redraw everything
    // drawAll();
}

getCanvasSize(); // call this once on page load
window.addEventListener('resize', getCanvasSize); // add an event listener so it does this every time we resize the page

const ctx = canvas.getContext('2d');

let a = new Text("Hello world");
a.y = 100;
a.draw();