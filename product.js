import { combineReducers, createStore } from "redux";

//constant define
//get product
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
//cart item
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//product state
const initialProductState = {
  products: ["shirt", "pen", "book", "sugar", "salt", "laptop"],
  productNumber: 6,
};
// cart state

const initialCartState = {
  carts: ["milk", "orange"],
  productNumber: 1,
};
// product action and reducer

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (value) => {
  return {
    type: ADD_PRODUCTS,
    payload: value,
  };
};

// cart action
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART_ITEMS,
    payload: product,
  };
};

//product reducer action
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        productNumber: state.productNumber + 1,
      };
    default:
      return state;
  }
};

//cart reducer action
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        carts: [...state.carts, action.type],
        productNumber: state.productNumber + 1,
      };
    default:
      return state;
  }
};
//store

// const store = createStore(productReducer);
// store.subscribe(() =>{
//     console.log(store.getState());

// })

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(getCart());
store.dispatch(addProducts("tomato"));
store.dispatch(addCart("keyboard"));

//cartreducer
