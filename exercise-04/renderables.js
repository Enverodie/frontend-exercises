// This is an ES6 class. 
// They're called "Syntactic sugar / convenient syntax" because fundamentally 
// they work in the same way as earlier JavaScript objects rather than 
// how objects might work in, say, Java.
class Text {

    static colors = ['#1c850e', '#017888', '#aa8110'];

    constructor(string) {
        this.text = string;

        let size = 200; // won't be available outside of constructor
        if (string.length != 0) size = Math.ceil(size / string.length); // set size inversely related to string length
        this.size = size;

        this.font = this.size + "px" + ctxFont;
        this.movementSpeed = 10;

        this.x = -(ctx.measureText(string).width); // set the staring Y point to the end of the text's width
        this.startY = Math.floor(Math.random() * 101); // set a random starting Y point between 0 and 100
        this.y = this.startY;
        this.colorIndex = Math.floor(Math.random() * Text.colors.length); // set a random color to be one of the colors in our Text.colors array
        this.opacity = 1; // maybe I'll use this some other time >:D
    }

    draw() {
        ctx.fillStyle = Text.colors[this.colorIndex];
        ctx.fillText(this.text, this.x, this.y);
        ctx.fillStyle = '#000';
    }
}

// Other notes on this type of class syntax:
/* If you're familiar with Java, you might be disappointed to find out that there is no:
        * Function overloading. Period. Inside or outside of classes.
        * Constructor chaining
        * Prototype classes (All classes come from one base prototype - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
        * Interfaces (https://stackoverflow.com/questions/3710275/does-javascript-have-the-interface-type-such-as-javas-interface)
*/