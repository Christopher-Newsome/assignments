// JS
    // document
    // How to create Elements
        // var h1 = document.createElement("h1")
        // var display = document.getElementById("list")
    // How to append HTML Elements
        // h1.textContent = "Hey I am h1"
        // display.appendChild(h1)

// C-R-U-D:
    // http or postman request types
        // Get: Read
        // Post: Create
        // Put: Update
        // Delete: Delete



// AJAX - Asynchronous Javascript and XML (XML - Extensible Markup Language)


        // readystate, onreadystatechange
        var xhr = new XMLHttpRequest()
        // console.dir(xhr)


    xhr.onreadystatechange = function(){
        // code to do the request stuff
        if( xhr.readyState == 4 && xhr.status == 200 ){
            // parsing turning raw json data (string) into a javascript object we can access
            var data = JSON.parse(xhr.responseText)
            parsePokemon(data)
        }
    }


    xhr.open(/*request type*/"GET",/*url*/"http://api.vschool.io:6543/pokemon.json",/*Is Asynchronous*/true )
    xhr.send()


    function parsePokemon(data){
        // console.dir(data);
        
        var display = document.getElementById("list")
        var pokeMon = data.objects[0].pokemon
        for(var i = 0; i < pokeMon.length; i++){
           var h3 = document.createElement("h3")
           h3.textContent = pokeMon[i].name
           display.appendChild(h3)
        }
    }
