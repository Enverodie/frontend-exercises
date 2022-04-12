# Welcome to the capstone exercise!
Thoughout the semester, you've been shown how to do various tricks in HTML, CSS, and Javascript. **Now it's your turn to put those exercises into practice!** In the fall (2022) I hope to have an *official* Code@IU web platform up, featuring student submissions from all future groups. We also like showcasing our members' works at the end of every semester. So, if you'd like a chance for your name and work to be featured in the website, or showcased in the next couple weeks, now is a perfect opportunity.

## If you've forgotten what we've done, never fear, everything is here.
- Exercise 1 covered loading Javascript files into HTML and the importance of considering load order.
- Exercise 2 introduced javascript [event listeners.](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) **Here are some other events you might find useful** -
    - Add an event listener to `document` for these -
        - click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
        - keypress, keydown, keyup
    - Add an event listener to `Window` for these -
        - resize (useful for making things responsive)
        - scroll (detects when a user scrolls down the page)
    - [Other event listeners you can use (includes document, window, and other dom listeners)](https://data-flair.training/blogs/javascript-event-types/)


- Exercise 3 introduced setTimeout. (There are other ways of creating animations, too. Can you figure out [`requestAnimationFrame()`?](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame))
- Exercise 4 introduced objects and drawing to an HTML canvas.
    - [Here are some other methods you can call on `const ctx = canvas.getContext('2d')`](https://www.w3schools.com/tags/ref_canvas.asp)
    - [Here is some more documentation from Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)


## If you need some inspiration, here are some ideas!
- Draw a fractal with the canvas and an HTML form (for fractal iteration)
- Implement the drunkard's walk using a canvas and Math.random() (bonus points if animated)
- Draw a flower to a canvas
- Create a canvas that draws particles following the cursor
- Create a basic UI that incorporates insertion, deletion, and modification of other HTML elements.