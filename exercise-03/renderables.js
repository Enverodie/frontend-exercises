// This is an ES6 class. 
// They're called "Syntactic sugar / convenient syntax" because fundamentally 
// they work in the same way as earlier JavaScript objects rather than 
// how objects might work in, say, Java.
class Text {

    static colors = ['#1c850e', '#017888', '#aa8110'];
    
    constructor (string) {
        this.text = string;
        this.x = 0;
        this.y = 0;
        this.colorIndex = 0;
        this.opacity = 1;
    }

    draw() {
        ctx.fillText(this.text, this.x, this.y);
    }
}

// Other notes on this type of class syntax:
/* If you're familiar with Java, you might be disappointed to find out that there is no:
        * Function overloading. Period. Inside or outside of classes.
        * Constructor chaining
        * Prototype classes (All classes come from one base prototype - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
        * Interfaces (https://stackoverflow.com/questions/3710275/does-javascript-have-the-interface-type-such-as-javas-interface)
*/