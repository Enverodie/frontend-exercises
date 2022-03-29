const canvasContainer = document.getElementById("canvasContainer");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// set this at the start so we can have a constant and less confusion with widths later
const ctxFont = " Trebuchet MS"; // the space at the beginning is intentional.


// this is a single object we write and instantiate at the same time
const canvasObjects = {

    drawables: [],

    // invokes the draw() method on all the drawables
    draw: function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clears the canvas
        for (obj of this.drawables) { // draws everything
            ctx.font = obj.font;
            obj.draw();
        }
    },

    // provides the functionality that allows sidescrolling animations (if this method is repeatedly called)
    sideScroll: function () {
        const nextY = 50;
        for (obj of this.drawables) {
            let buffer = ctx.measureText(obj.text).width;
            if (obj.x + obj.movementSpeed > canvas.width + buffer / 2) { // the text has gone too far right
                obj.x = -buffer;

                if (obj.y > canvas.height) { // the text has gone too far down the page
                    obj.y -= canvas.height;
                }
                else { // the text has NOT gone too far down the page
                    obj.y += nextY;
                }
            }
            else { // the text has NOT gone too far right
                obj.x += obj.movementSpeed;
            }
            this.draw(); // call the draw method on all the objects stored in this canvasObjects class instance
        }
    },

    // makes everything start moving using setTimeout (which might not be an ideal solution, but, eh)
    startMove: function () {
        this.sideScroll();
        setTimeout(() => {
            this.startMove();
        }, 5);
    },

    // allow this class to draw another eleement
    insert: function (element) {
        this.drawables.push(element);
    },

    // takes form input and converts it into a new text class
    loadFromForm: function () {
        let form = document.getElementById('textInput');
        let newObject = new Text(form.value);
        this.insert(newObject);
        form.value = "";
    }

} // end of canvasObjects object


// "Tell" the canvas how large it needs to be and redraw.
// This is outside of canvasObjects because it's dealing with the canvas itself
function getCanvasSize() {
    canvas.width = 0; // we need this to be 0 so the container isn't influenced by the contents of the container
    let dimensions = canvasContainer.getBoundingClientRect();
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
}

window.addEventListener('resize', getCanvasSize); // add an event listener so it does this every time we resize the page

/*
// This is just a sample insert, which we don't really need anymore.
let a = new Text("Hello world"); // create an element by default
canvasObjects.insert(a); // put our new Text object inside the canvas rendering object we created earlier
*/

// call this once on page load
// and make sure to do so after all our initial objects have been
// put in our "canvasObjects" class instance.
getCanvasSize();

// call this on page load so that the texts move and redraw.
canvasObjects.startMove();