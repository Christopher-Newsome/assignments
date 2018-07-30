// The square's color will change as follows:

eventS.addEventListener("mouseover", myFunction);
eventS.addEventListener("mousedown", mySecondFunction);
eventS.addEventListener("mouseup", myThirdFunction);
eventS.addEventListener("dblclick", myFourthFunction);
window.addEventListener("scroll", myFifthFunction);
window.addEventListener("keydown", mySixthFunction);

// Blue when the mouse hovers over the square

function myFunction() {
    document.getElementById("eventS").style.backgroundColor = "blue";
}

// Red when the mouse button is held down over the square

function mySecondFunction() {
    document.getElementById("eventS").style.backgroundColor = "red";
}

// Yellow when the mouse button is let go over the square

function myThirdFunction() {
    document.getElementById("eventS").style.backgroundColor = "yellow";
}

// Green when the mouse is double clicked in the square

function myFourthFunction() {
    document.getElementById("eventS").style.backgroundColor = "green";
}

// Orange when the mouse scroll is used somewhere in the window (not just over the square).

function myFifthFunction() {
    document.getElementById("eventS").style.backgroundColor = "orange";
}

// You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color.

function mySixthFunction(event) {
    if(event.code === "KeyB"){
    document.getElementById("eventS").style.backgroundColor = "blue";
    } else if (event.code === "KeyR"){
        document.getElementById("eventS").style.backgroundColor = "red";
    } else if (event.code === "KeyY"){
        document.getElementById("eventS").style.backgroundColor = "yellow";
    } else if (event.code === "KeyG"){
        document.getElementById("eventS").style.backgroundColor = "green";
    } else if (event.code === "KeyO"){
        document.getElementById("eventS").style.backgroundColor = "orange";
    }
}
