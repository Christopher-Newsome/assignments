// var axios = require("axios");
function getRequest() {
    axios.get("https://api.vschool.io/christopher-newsome/todo").then(function(response){
    view(response.data)
    console.dir(response.data)
}).catch(function(err){
    console.log(err)
})
}

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
    document.getElementById("list").innerHTML = "";
    data.forEach(function(todo){
        let todoItem = document.createElement("div")

        document.getElementById("list").appendChild(todoItem)
        todoItem.innerHTML =    `
                                <h3>${todo.title}</h3>
                                <p>${todo.description}</p>
                                <p>${todo.price}</p>
                                <input type = "checkbox">
                                `
    let button = document.createElement("button");
    button.textContent = "DELETE";
    todoItem.appendChild(button);
    // button.setAttribute("onclick", `deleting('${todo._id}')`)
    button.addEventListener("click", function(){
        axios.delete(`https://api.vschool.io/christopher-newsome/todo/${todo._id}`).then(function(response){
            console.log(response)
            getRequest()
        })
    })
    })

}

// function deleting(id) {
//     axios.delete(`https://api.vschool.io/christopher-newsome/todo/${id}`).then(function(response){
//             console.log(response)
//             getRequest()
//     })
// }

document.postForm.addEventListener("submit", function(event){
    event.preventDefault();
    const postObj = {
        title: document.postForm.title.value,
        description: document.postForm.description.value,
        price: document.postForm.price.value
    }
    axios.post("https://api.vschool.io/christopher-newsome/todo", postObj).then(function(response){
        console.log(response.data)
        getRequest()

    })
})
getRequest()
// axios.delete("https://api.vschool.io/christopher-newsome/todo/<todoid>").then(function(response){
//     view(response.data)
//     console.dir(response.data)
// }).catch(function(err){
//     console.log(err)
// })