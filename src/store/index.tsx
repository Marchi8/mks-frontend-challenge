import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./modules/reducer";

const reducers = combineReducers({ products: cartReducer });

const store = configureStore({ reducer: reducers });

export default store;