import React, { useState } from "react";
import{useDispatch, useSelector}from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from "../redux/counterSlice";



const Counter = () => {
  const [amount,setAmount]=useState("")
  const dispatch=useDispatch()
 const count= useSelector((state)=>state.counter.count);



 const handleIncrement =()=>{
    if(amount==""){
      alert("please provide value")
    }else{
      // update state in store
      dispatch(incrementByAmount(Number(amount)))
    }
 }
  return (
    <div
      style={{ height: "70vh" }}
      className=" d-flex justify-content-center align-items-center"
    >
      <div className=" d-flex justify-content-center align-items-center border rounded rounded p-5 w-25 flex-column">
        <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div className=" w-100 d-flex justify-content-evenly align-items-center mt-5  gap-2">
        <div className=" btn btn-warning" onClick={()=>dispatch(increment())}>Increment</div>
        <div className=" btn btn-success" onClick={()=>dispatch(decrement())}>Decrement</div>
        <div className=" btn btn-danger" onClick={()=>dispatch(reset())}>Reset</div>
        </div>
       <div className=" d-flex align-items-center mt-3 flex-column">
        <input type="text" onChange={(e)=>setAmount(e.target.value)} className=" form-control" placeholder="enter amount to be increment" />
        <button onClick={handleIncrement} className="btn btn-primary ms-1 my-2">Increement Amount</button>
       </div>
      </div>
    </div>
  );
};

export default Counter;
