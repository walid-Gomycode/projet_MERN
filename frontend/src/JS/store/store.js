import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import userReducer from "../features/userSlice"

const store = configureStore({
    //// redux toolkit configuration : permit to combine multiple reducers (slices) into one root reducer
    reducer: {
        auth: authReducer,
        // add other reducers here
        user: userReducer,
    }
})

export default store;