const { applyMiddleware, createStore } = require("redux");
const { logger } = require("redux-logger");

//constant define cart and product add
const ADD_PRODUCTS = "ADD_PRODUCTS";
const GET_PRODUCTS = "GET_PRODUCTS";
// const CART_ADD_ITEMS = "CART_ADD_ITEMS";
// const CART_GET_ITEMS = "CART_GET_ITEMS";

const initialProductState = {
  products: ["pen", "laptop", "mobile"],
  productCount: 3,
};
const getProduct = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        productCount: state.productCount + 1,
      };
    default:
      return state;
  }
};

const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProduct());
store.dispatch(addProduct("tomato"));
