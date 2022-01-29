let slope;
let h, hh; // height, half height

// refreshes the variables when called
function setVars() {
    // visualViewport returns the part of the viewport the user is currently seeing.
    // for example, it excludes the browser's scrollbar.
    // https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport
    slope = (window.visualViewport.width) / (window.innerHeight);

    h = window.innerHeight;
    hh = h / 2;
}

// set the variables before doing anything
setVars();

const ch = document.getElementById('sidescroll').children;

// sets the X offset of every direct sidescroll element child in pixels.
// uses "<element>.style.left" to do this.
function setSidescrollChildrenX() {
    for (let i = 0; i < ch.length; i++) {
        let rect = ch[i].getBoundingClientRect();
        let dist = (rect.height / 2 + rect.top) - hh;
        ch[i].style.left = `${dist * slope}px`; // 0 is the X center <---------->
    }
}

// run once without scrolling
setSidescrollChildrenX();


// Event listeners

window.addEventListener('resize', e => {
    setVars();
    setSidescrollChildrenX();
})

window.addEventListener('scroll', e => {
    setSidescrollChildrenX();
})

