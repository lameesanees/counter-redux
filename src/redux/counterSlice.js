import { createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        // actions to be defined here
        incrementCounter :(state)=>{
            state.count+=1
        },
        decrementCounter :(state)=>{
            state.count-=1
        },
        resetCounter :(state)=>{
            state.count=0
        },
    }
})

export const {incrementCounter,decrementCounter,resetCounter}= counterSlice.actions
export default counterSlice.reducer