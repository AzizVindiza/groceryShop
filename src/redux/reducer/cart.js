import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data : [],
    filter:{

    },
    totalPrice:0


}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
         setProducts: (state,action) => {
             state.data = state.data.findIndex((item) => item.id === action.payload.id ) > -1 ? alert('Уже есть ') : [...state.data,{...action.payload, count: 1, checked : false}]
         },
         addCount: (state,action) => {
             state.data =
                 state.data.map((item) => {
                     if (item.id === action.payload.id){
                         return {...item, count:item.count + 1}
                     }
                     return  item
                 } )
         },
        removeCount: (state,action) => {
            state.data =
                state.data.map((item) => {
                    if (item.id === action.payload.id){
                        return {...item, count: item.count === 1 ?  item.count : item.count - 1}
                    }
                    return  item
                } )
        },
        removeProduct: (state,action) => {
             state.data = state.data.filter((item) => !item.checked )
        },
        changeChecked : (state,action) => {
            state.data =
                state.data.map((item) => {
                    if (item.id === action.payload.id){
                        return {...item,checked: !item.checked }
                    }
                    return  item
                } )
        },
        checkedAll: (state,action)  => {
             state.data = state.data.map((item) => {
                 return {...item, checked: true }
             } )
        }
    }

})

export default cartSlice.reducer
export const {setProducts,addCount,removeCount,changeChecked,removeProduct,checkedAll} = cartSlice.actions