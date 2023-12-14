import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slice/addUser/userSlice'
 const store=configureStore({
   reducer:{
     "user":userSlice


   }
 })

export  default  store