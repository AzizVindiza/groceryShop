import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data:[],
    filter:{
        status:"",
        inStock:false
    }
}

const favoriteSlice = createSlice({
        name:"favorite",
        initialState,
        reducers : {
            setFavorite:(state,action)=>{
                state.data = state.data.findIndex((item) => item.id === action.payload.id) > -1 ? state.data.filter((item)=> item.id !== action.payload.id) :[...state.data,action.payload]
            },
            setInStock:(state,action)=>{
                state.filter= {
                    ...state.filter,
                    inStock: action.payload
                }
            },
            setStatus:(state,action)=>{
                state.filter={
                    ...state.filter,
                    status: action.payload
                }
            }
        }
    }
)

export const {setFavorite,setInStock,setStatus} = favoriteSlice.actions
export default favoriteSlice.reducer