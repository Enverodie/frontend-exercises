const canvasContainer = document.getElementById("canvasContainer");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// set this at the start so we can have a constant and less confusion with widths later
const ctxFont = "30px Trebuchet MS";
ctx.font = ctxFont;

// this is a single object we write and instantiate at the same time
const canvasObjects = {
    drawables: [],
    moveXSpeed: 10,

    draw: function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clears the canvas
        ctx.font = ctxFont;
        for (obj of this.drawables) { // draws everything
            obj.draw();
        }
    },

    sideScroll: function () {
        const nextY = 50;
        for (obj of this.drawables) {
            let buffer = ctx.measureText(obj.text).width;
            console.log(ctx.font);
            if (obj.x + this.moveXSpeed > canvas.width + buffer / 2) {
                obj.x = -buffer;

                if (obj.y > canvas.height) {
                    obj.y -= canvas.height;
                }
                else {
                    obj.y += nextY;
                }
            }
            else {
                obj.x += this.moveXSpeed;
            }
            this.draw();
        }
    },

    startMove: function () {
        this.sideScroll();
        setTimeout(() => {
            this.startMove();
        }, 5);
    },

    insert: function (element) {
        this.drawables.push(element);
    },

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