
import './App.css';
import { useState,useEffect,useMemo,useCallback } from 'react';
import Header from './components/Header';

function App() {
  const[number,setNumber]=useState(0)
  const data=useMemo(()=>{     //Rerender önlemek için 
    return calculateObject();
  },[number]);
 //Eğer dependecy arraye nımber eklersem number her değiştiğinde tekrardan render edilir. 
  
 const increment=useCallback(()=>{
    setNumber((prevState)=>prevState+1)
  },[])

  return (
    <div className="App">
      <Header increment={increment}/> 
      <hr></hr>
     <h1>{number}</h1>
     
     <br></br>
     
    </div>
  );
}
function calculateObject(){
  return {name:"Mehmet"}
}
export default App;
