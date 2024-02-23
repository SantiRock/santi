import { configureStore } from "@reduxjs/toolkit";
import { sliceReducer } from "./slice";
import { modalSliceReducer } from "./modalSlice";

export const store = configureStore({
    reducer: {
        content: sliceReducer,
        modal: modalSliceReducer,
    }
})


