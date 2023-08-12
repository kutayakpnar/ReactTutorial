import React from 'react'
import { useState,useEffect } from 'react';

function Counter() {

  const[number,setNumber]=useState(0)
  const[name,setName]=useState("Mehmet");

  useEffect(()=>{
    console.log("State güncellendi")
  },[number,name ]) //sadece number veya name  statei güncellendiğinde log atar.
  
  useEffect(()=>{
    console.log("Component mount edildi")
    const interval=setInterval(()=>{
        setNumber((n)=>n+1)
    },1000)
    return ()=>clearInterval(interval);
  } ,[]) //Componentın mount edildiği anı yakalamak için boş array.

  return (
    <div >
    <h1>{number}</h1>
    <button onClick={()=>setNumber(number+1)}>Increase Number </button>
    <hr/>
    <h1>{name}</h1>
    <button onClick={()=>setName("Kutay")}>Change Name </button>
  </div>
  )
}

export default Counter