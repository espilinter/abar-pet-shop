import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'
const initialState = {
    openAsideState: false
};

export const HandleSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        handleOpenAsideState: (state, action) => {
            state.openAsideState = action.payload;
        }
    },
});

export const {
    handleOpenAsideState
} = HandleSlice.actions;

export default HandleSlice.reducer;
