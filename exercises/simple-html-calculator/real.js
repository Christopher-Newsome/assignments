var addButton = document.getElementById("addButton")

addButton.addEventListener("click", function(){
    var one = document.getElementById("one").value
    var two = document.getElementById("two").value
    var display = document.getElementById("display1")

    display.textContent = Number(one) + Number(two)

    // console.log(one)
    // console.dir(one)
    // console.log(two)
    // console.dir(two)
})

var subButton = document.getElementById("subButton")

subButton.addEventListener("click", function(){
    var three = document.getElementById("three").value
    var four = document.getElementById("four").value
    var display = document.getElementById("display2")

    display.textContent = Number(three) - Number(four)

    // console.log(one)
    // console.dir(one)
    // console.log(two)
    // console.dir(two)
})

var multButton = document.getElementById("multButton")

multButton.addEventListener("click", function(){
    var five = document.getElementById("five").value
    var six = document.getElementById("six").value
    var display = document.getElementById("display3")

    display.textContent = Number(five) * Number(six)

    // console.log(one)
    // console.dir(one)
    // console.log(two)
    // console.dir(two)
})