import {createSlice} from "@reduxjs/toolkit"


const initialState={
  userData:[]
}
const userSlice=createSlice({
name:"userData",
  initialState,
  reducers:{
  handleUser:(state,action)=>{
    console.log(state,"state")

  }

  }
})

export  default  userSlice.reducer
export const {handleUser}=userSlice.actions