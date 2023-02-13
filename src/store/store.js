// import the configureStore() function that automatically sets up an empty store:
import { configureStore } from "@reduxjs/toolkit";
// Import the reducers from account.js:
import accountReducer from "./account";

//Export the store and set it to respond to the reducers we've made and imported:
export default configureStore({
    reducer: {
        account: accountReducer,
    },
});