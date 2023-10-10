import { configureStore } from "@reduxjs/toolkit";
import HandleSlice from "../HandleSlice/HandleSlice";

export const store = configureStore({
    reducer: {
        states: HandleSlice,
    },
});
