// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Full-width images
function one() {
    for ( var i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
}

// Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// for fun//

window.addEventListener("keydown", mySixthFunction);

function mySixthFunction(event) {
    if(event.code === "KeyB"){
    document.getElementsByClassName("border")[0].style.color = "blue"; 
    document.getElementsByClassName("border")[1].style.color = "blue";
    document.getElementsByClassName("border")[2].style.color = "blue";
    document.getElementsByClassName("border")[3].style.color = "blue";
    } else if (event.code === "KeyR"){
        document.getElementsByClassName("border")[0].style.color = "red";
        document.getElementsByClassName("border")[1].style.color = "red";
        document.getElementsByClassName("border")[2].style.color = "red";
        document.getElementsByClassName("border")[3].style.color = "red";
    } else if (event.code === "KeyY"){
        document.getElementsByClassName("border")[0].style.color = "yellow";
        document.getElementsByClassName("border")[1].style.color = "yellow";
        document.getElementsByClassName("border")[2].style.color = "yellow";
        document.getElementsByClassName("border")[3].style.color = "yellow";
    } else if (event.code === "KeyG"){
        document.getElementsByClassName("border")[0].style.color = "green";
        document.getElementsByClassName("border")[1].style.color = "green";
        document.getElementsByClassName("border")[2].style.color = "green";
        document.getElementsByClassName("border")[3].style.color = "green";
    } else if (event.code === "KeyO"){
        document.getElementsByClassName("border")[0].style.color = "orange";
        document.getElementsByClassName("border")[1].style.color = "orange";
        document.getElementsByClassName("border")[2].style.color = "orange";
        document.getElementsByClassName("border")[3].style.color = "orange";
    }
}rr