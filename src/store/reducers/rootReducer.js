// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './../slice/productslice';
import pageReducer from "./../slice/allpageslice"
const rootReducer = combineReducers({
  // menu: menuReducer,
  // page: pageReducer,
  products:productReducer,
  // Add other reducers here
});

export default rootReducer;
