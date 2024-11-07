import {  configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/productsSlice";
import productReducer from './slices/productSlice';



const store = configureStore({
    reducer:{
        productsState: productsReducer,
        productState: productReducer ,

    },
    middleware: [thunk]
})

export default store;
