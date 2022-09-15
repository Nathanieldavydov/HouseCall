import { configureStore } from '@reduxjs/toolkit';
import navReducer from "./slices/navSlice";

// console.log(navReducer)
export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});