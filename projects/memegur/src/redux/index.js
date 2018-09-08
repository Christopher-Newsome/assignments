import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'


const initState = {
    whatyourcalling: []
}


const getSomethinf = () => {

}


const reducer = ( prevState = initState, action ) => {
    switch(action.type) {
        default:
            return prevState
    }
}


export default createStore(reducer, applyMiddleware(thunk))