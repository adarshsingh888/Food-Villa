import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
      additems:(state,action)=>{
        //mutating the state here
         state.items.push(action.payload)
      },
      removeItem:(state)=>{
          state.items.pop()
      },
      clearCart:(state)=>{
        state.items.length=0;
      }
    
    }
})

export const{additems,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;