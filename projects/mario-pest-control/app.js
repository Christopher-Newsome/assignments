var addButton = document.getElementById("addButton")

addButton.addEventListener("click", function(){
    var one = Number(document.getElementById("one").value) * Number(document.getElementById('goombaVal').innerText)
    var two = Number(document.getElementById("two").value) * Number(document.getElementById('bobVal').innerText)
    var three = Number(document.getElementById("three").value) * Number(document.getElementById('cheepVal').innerText)
    var display = document.getElementById("display")

    display.textContent = (one) + (two) + (three)

    // console.log(one)
    // console.dir(one)
    // console.log(two)
    // console.dir(two)
})