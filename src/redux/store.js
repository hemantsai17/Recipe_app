import { applyMiddleware, compose } from "redux"; 
import { legacy_createStore as createStore } from 'redux'
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import rootReducer  from "./rootReducer";
import rootSaga from "./saga";
import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]


if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

// const store = configureStore({
//     reducer: rootReducer,
//     // middleware: getDefaultMiddleware().concat(sagaMiddleware)
//      middleware: [sagaMiddleware, logger],
// })

sagaMiddleware.run(rootSaga)

export default store;