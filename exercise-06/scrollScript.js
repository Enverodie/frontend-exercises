
const home = document.getElementById("home");
const main = document.getElementsByTagName("main")[0];

// in certain situations a "scroll" listener would work just as well, 
// but because there's nothing to scroll we'll use wheel instead.
window.addEventListener("scroll", function(){

    const defaultTextTopVH = 50;
    const minTextTopVH = 10;
    home.style.top = `${
        Math.max(defaultTextTopVH - (window.scrollY/6), minTextTopVH)
    }vh`;
    
    // this.screen.height / 2 is just half the screen height.
    // this is important because we chose a "top: 150vh" for the main element.
    // i.e. the main element starts at the bottom of the screen and then half the screen further.
    // Since we start seeing the top of the main at the bottom of the screen, we have to essentially subtract an entire screen's height
    const max = this.screen.height / 2;
    const baseline = this.screen.height / 2;

    if ( window.scrollY >= baseline ) {
        main.style.backgroundColor = "rgba(47, 255, 28, " + (window.scrollY - baseline) / max + ")";
    }

})