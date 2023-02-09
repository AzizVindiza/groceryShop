import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data:[],
    filter:[],
    error:"",
    status:""
}

let usersSlice = createSlice({
    name:"users",
    initialState,
    reducers : {

    }
})
export default usersSlice.reducer