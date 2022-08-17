import { configureStore } from "@reduxjs/toolkit";
import creatSagaMiddleware from "@redux-saga/core";
import productReducer from "./productSlice";
import saga from "./saga";
// import counterReducer from "../backup/day13/CounterSlice";
let sagaMiddleware = creatSagaMiddleware();
export const store = configureStore(
    {
        reducer:{
        product: productReducer
    },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

// import { configureStore } from "@reduxjs/toolkit";
// import creatSagaMiddleware from "@redux-saga/core";
// import productReducer from "../backup/project/productSlice";
// import saga from "../../src/saga";
// // import counterReducer from "../backup/day13/CounterSlice";
// let sagaMiddleware = creatSagaMiddleware();
// export const store = configureStore(
//     {
//         reducer:{
//         product: productReducer
//     },
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
// });

// sagaMiddleware.run(saga);

