import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
// import { legacy_createStore as createStore, combineReducers } from "redux";

// importando o reducer
import productsReducer from "./modules/products/reducer";

// combinando os reducers da aplicação, nesse exemplo temos apenas um
const reducers = combineReducers({ products: productsReducer });

// passando os reducers combinados para a store
const store = configureStore({ reducer: reducers });

// const store = createStore(reducers);

export default store;