import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //   hambergerState: true,

};

export const HandleSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // handleHambergerState: (state, action) => {
        //   state.hambergerState = action.payload;
        // },

    },
});

export const {
    //   handleHambergerState
} = HandleSlice.actions;

export default HandleSlice.reducer;
