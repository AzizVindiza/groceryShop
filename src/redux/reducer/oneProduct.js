import {createSlice} from "@reduxjs/toolkit";

const initialState={
    data: [],
    filter:{}

}

const oneProductSlice = createSlice({
    name:"oneProduct",
    initialState,
    reducers:{
        aboutProduct:(state,action)=>{
            state.data = [action.payload]

        }

    }
})

export const {aboutProduct} = oneProductSlice.actions
export default oneProductSlice.reducer