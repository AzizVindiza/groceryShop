import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data:[],
    filter:{
        name:"",
        category: ""
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
        },
        getSearch:(state,action)=>{
            state.filter={
                ...state.filter,
                name:action.payload
            }
        },
        setCategory:(state,action)=>{
            state.filter = {
                ...state.filter,
                category: action.payload
            }
        }
    }
})

export const {setAllProducts,getAllStatus,getSearch,setCategory} = productsSlice.actions
export default productsSlice.reducer