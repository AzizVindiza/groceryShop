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
        },
        changeProductsGrade:(state,action)=>{
            state.data =
                state.data.map((item) => {
                    if (item.id === action.payload.item.id){
                        return {...item,grade: item.grade !== action.payload.grade ? action.payload.grade : 0}
                    }
                    return  item
                } )
        }
    }
})

export const {setAllProducts,getAllStatus,getSearch,setCategory,changeProductsGrade} = productsSlice.actions
export default productsSlice.reducer