import { createSlice } from "@reduxjs/toolkit"
import { data } from "../assets/content"

let lg;

if(navigator.language.startsWith("es")) {
    lg = "es"; 
} else {
    lg = "en"
}

const initialState = {
    lang: {...data[lg]},
    lg: lg
}


const slice = createSlice({
    name: "content",
    initialState: initialState,
    reducers: {
        setLanguage(state, action) {
            state.lang = { ...data[action.payload]};
        },
        setLg(state, action) {
            state.lg = action.payload;
        }
    }
});

export const { setLanguage, setLg } = slice.actions;
export const sliceReducer = slice.reducer;