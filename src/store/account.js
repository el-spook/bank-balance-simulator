 /* This file is a "slice" that contains all the reducers to manage the state of the account.
 The createSlice() function is therefore imported from the toolkit. */
 import { createSlice } from "@reduxjs/toolkit";

 /* Name and export the slice. The function createSlice() accepts a slice name,
 an initial state (here it is a value of £250), and an object containing reducer functions. */
 export const accountSlice = createSlice({
    name: "account", // The slice name
    initialState: {
        value: 250
    },
    // Name the four reducers & describe how each function will change the state of the app.
    reducers: {
        /* The deposit and withdraw reducers take an extra argument of "action" which is sent as
        an argument from the onClick functions to the reducers in the form of a user input.
        The deposit reducer adds this payload to the balance. The withdraw reducer subtracts it. */ 
        deposit: (state, action) => {
            state.value += action.payload;
        },
        withdraw: (state, action) => {
            state.value -= action.payload;
        },
        /* The addInterest and charges reducers update the state using a fixed calculation on each button click. */
        addInterest: (state) => {
            // toFixed() turns the number into a string, so Number() is needed to cast it back again.
            state.value = Number((state.value * 1.05).toFixed(2));
        },
        charges: (state) => {
            state.value = Number((state.value * 0.85).toFixed(2));
        },
    },
 });
 // Export the reducers and ensure that action creators are generated:
 export const {deposit, withdraw, addInterest, charges} = accountSlice.actions;
 export default accountSlice.reducer;