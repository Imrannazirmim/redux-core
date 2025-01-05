// my plan
//state - count: 0,
//action - increment, decrement, reset
//using reducer - state & action
//store
import { createStore } from "redux";

//constanst define
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_ADD_VALUE = 'INCREMENT_ADD_VALUE'

const initialState = {
  count: 0,
};

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

const incrementAddValue = (value) => {
  return{
    type: INCREMENT_ADD_VALUE,
    payload: value
  }
}

//creating reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_ADD_VALUE:
      return {
        ...state,
        count: state.count + action.payload
      }
    default:
      state;
  }
};

//store data

const store = createStore(counterReducer)

store.subscribe(() => {
  console.log(store.getState());
  
})

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter())

store.dispatch(incrementAddValue(5))
store.dispatch(incrementAddValue(15))