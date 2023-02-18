import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data : [],
    filter:{

    },
    totalPrice: 0,
    totalDiscount: 0
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
         setProducts: (state ,action) => {
             state.data = state.data.findIndex((item) => item.id === action.payload.id ) > -1 ? alert('Уже есть ') : [...state.data,{...action.payload, count: 1, checked : false}];
             state.totalPrice = state.data.reduce((acc,rec)=>acc += rec.price * rec.count,0)
             state.totalDiscount += action.payload.discount ? ((+action.payload.price) - ((+action.payload.price) / 100 * action.payload.discountPercent).toFixed(2)) : 0
         },
         addCount: (state,action) => {
             state.data =
                 state.data.map((item) => {
                     if (item.id === action.payload.id){
                         return {...item, count:item.count + 1}
                     }
                     return  item
                 } )
             state.totalPrice = state.data.reduce((acc,rec)=>acc += rec.price * rec.count,0)
             state.totalDiscount += action.payload.discount ? ((+action.payload.price) - ((+action.payload.price) / 100 * action.payload.discountPercent).toFixed(2)) : 0

         },
        removeCount: (state,action) => {
            state.data =
                state.data.map((item) => {
                    if (item.id === action.payload.id){
                        return {...item, count: item.count === 1 ?  item.count : item.count - 1}
                    }
                    return  item
                } )
            state.totalPrice = state.data.reduce((acc,rec)=>acc += rec.price * rec.count,0)
            state.totalDiscount += action.payload.discount ? ((+action.payload.price) - ((+action.payload.price) / 100 * action.payload.discountPercent).toFixed(2)) : 0

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
        },

    }

})

export default cartSlice.reducer
export const {setProducts,addCount,removeCount,changeChecked,removeProduct,checkedAll} = cartSlice.actions