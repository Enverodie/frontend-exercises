// when clickButton == false color cycling will be on
let clickedButton = false;


function toggleButtonClick() {
    
    const button = document.getElementById("toggle01");

    if (!clickedButton) {
        button.innerText = "Start color cycling";
        clickedButton = true;
    }
    else {
        button.innerText = "Stop color cycling";
        clickedButton = false;
        nextColor();
    }

}

function nextColor(time = 3000) {
    if (!clickedButton) {

        setTimeout(() => {
            setColor(generateHex());
            nextColor();
        }, time)

    }
}

// creates a random six-digit hexadecimal value in string format
function generateHex() {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = 0; i < 6; i++) {   
        result.push(

            hexRef[Math.floor(Math.random()*16)]
            
        );
    }

    console.log(result.join(''))
    return result.join('');

}

// sets the document's color to any 6-digit hex string
function setColor(hexValue) {
    document.body.style.backgroundColor = `#${hexValue}`;
}