var redux = require('redux')

// REDUX

//Initail State
var state = {
    count: 0
}

//Actions - Action Creators //

function addOne(){
    return {
        type: "ADD_ONE" /* SCREAMING SNAKE CASE */
    }
}

function subtractOne(){
    return {
        type: "SUBTRACT_ONE"
    }
}

function multiplyFive(){
    return {
        type: "MULTIPLY_FIVE"
    }
}

function divideTwentyFive(){
    return {
        type: 'DIVIDE_TWENTYFIVE'
    }
}

function setCount(newCount){
    return {
        type: "SET_COUNT",
        newCount: newCount
    }
}

//REDUCER-function that takes action objects and updates the store (state) approprietely

function reducer(prevState = state , action){
    switch(action.type){
        case "ADD_ONE":
            return {
                count: prevState.count + 1
            }
        case "SUBTRACT_ONE":
            return {
                count: prevState.count - 1
            }
        case "MULTIPLY_FIVE":
            return {
                count: prevState.count * 5
            }
        case "DIVIDE_TWENTYFIVE":
            return {
                count: prevState.count / 25
            }
        case "SET_COUNT":
            return {
                count: action.newCount
            }
        default:
            return prevState
    }
}

//Dispatch sends action to store

var store = redux.createStore(reducer)

store.subscribe(function(){
    console.log(store.getState())
})


store.dispatch(setCount(23))
store.dispatch(addOne())
store.dispatch(addOne())
store.dispatch(subtractOne())
store.dispatch(addOne())
store.dispatch(multiplyFive())
store.dispatch(divideTwentyFive())