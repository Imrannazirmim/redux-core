
//define constant
const INCREAMENT = 'INCREAMENT'
const DECREAMENT = 'DECREAMENT'
const ADD_USER = 'ADD-USER'

//state action
const initialCounterState = {
    count: 0,
}

const initialUserState = {
    users: [{name: 'imran nazir mim'}]
}

//action => object type, payload

const increamentCounter = () => {
    return {
        type: INCREAMENT,
    }
}

const decreamentCounter = () => {
    return {
        type: DECREAMENT,
    }
}

const addUsers = () => {
    return {
        type: ADD_USER,
        payload: {name: 'imran khan'}
    }
}

//redux core concept
//1. state
//2. dispatch action
//3. reducer check of type
//4. store update
