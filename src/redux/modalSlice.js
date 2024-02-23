import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal: false,
    transition: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        setShowModal(state, action){
            state.showModal = action.payload;
        },
        setTransition(state, action){
            state.transition = action.payload;
        },
    }
});


export const { setShowModal, setTransition } = modalSlice.actions;
export const modalSliceReducer = modalSlice.reducer;

