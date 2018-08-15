// var axios = require("axios");
axios.get("https://api.vschool.io/christopher-newsome/todo").then(function(response){
    view(response.data)
    console.dir(response.data)
}).catch(function(err){
    console.log(err)
})

function displayData(data){
    // console.dir(data);
    
    var display = document.getElementById("list")
    var toDo = document.createElement("div")
    for(var i = 0; i < toDo.length; i++){
       var h3 = document.createElement("h3")
       h3.textContent = toDo[i].title
       display.appendChild(h3)

       // for each todo object in the array
        // create a test element (p, h1-16, span)
        // put todo text in text element
        // append text element to list on dom
    }
}

function view(data) {
    data.forEach(function(todo){
        var todoItem = document.createElement("div")
        document.getElementById("list").appendChild(todoItem)
        todoItem.innerHTML =    `
                                <h3>${todo.title}</h3>
                                <p>${todo.description}</p>
                                <p>${todo.price}</p>
                                `
    })
}