//async actions -> api calling
//api url -> https://jsonplaceholder.typicode.com/todos
//middleware -redux-thunk using
//axios api

const { default: axios } = require("axios");
const { applyMiddleware, createStore } = require("redux");
const { thunk } = require("redux-thunk");

//define action state create
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
//states
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};
//actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

//reducers
const getTodoReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
          ...state,
        isLoading: true,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };

    default:
      return state;
  }
};
//store
const getFetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles))
      })
      .catch((error) => {
        dispatch(getTodosFailed(error.message))
      });
  };
};
const store = createStore(getTodoReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getFetchData());
//dispatch
