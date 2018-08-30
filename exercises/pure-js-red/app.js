const redux = require('redux')


//Initial State
const state = {
    contacts: []
}

//Actions
function addContact(contact){
    return {
        type: "ADD_CONTACT",
        contact: contact
    }
}

function deleteContact(){
    return {
        type: "DELETE_CONTACT"
    }
}


//Reducer

function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_CONTACT": 
            return {
                contacts: [...prevState.contacts, action.contact]
            }
        case "DELETE_CONTACT":
            return {
                contacts: prevState.contacts.slice(0, prevState.contacts.length - 1)
            }
    }
}

//Dispatch

var store = redux.createStore(reducer)

store.subscribe(function(){
    console.log(store.getState())
})

store.dispatch(addContact({
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
}))

store.dispatch(addContact({
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
}))

store.dispatch(deleteContact())