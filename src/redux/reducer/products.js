import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import data from "../../utils/data";

const initialState = {
    data:[],
    filter:{
        name:""
    },
    listOfAllStatus:[],
    error:"",
    status:""
}

let productsSlice = createSlice({
    name:"products",
    initialState,
    reducers : {
        setAllProducts:(state,action)=>{
            state.data = action.payload
        },
        getAllStatus: (state,action)=>{
            state.listOfAllStatus = action.payload.reduce((acc,el)=>{
                if (acc.includes(el.status)) return acc;
                return [...acc,el.status]
            },[])
        }
    }
})

export const {setAllProducts,getAllStatus} = productsSlice.actions
export default productsSlice.reducer