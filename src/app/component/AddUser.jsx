import {useDispatch} from "react-redux";
import { useState } from "react";

const AddUser = () => {

  const[name,setName]=useState("")
  console.log(name,"nameee")
  // const handleUser=()=>{
  //
  // }


  const dispatch=useDispatch()
  return (
    <>
      <input type="text" placeholder="Enter your name " value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>dispatch(handleUser(name))}>Add User</button>
    </>
  )
}
export default AddUser