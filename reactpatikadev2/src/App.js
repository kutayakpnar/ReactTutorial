import { useState } from "react";
import Counter from './components/counter';
import InputExample from "./components/InputExample";

function App() {
  return <div>
    <InputExample/>
  </div>
  /*
  const[name,setName]=useState("Kutay"); //use state hooku kullanarak state oluşturduk.İlk değer olarak 'Kutay' verdik.
  const[age,setAge]=useState(22);
  const[friends,setFriends]=useState(["Kutay","Ahmet","Mustafa","Ali","Ayşe","Veli"]);
  const[address,setAddress]=useState({title:"Balıkesir",country:"Türkiye"})


  return (
    <div className="App">
      <h1>Merhaba {name} </h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Click Name</button>
      <button onClick={() => setAge(age+1)}>Click Age</button>

      
    <hr />
    <br></br>
      
    {friends.map((friend,index)=>(
      <div key={index}>
        {friend}</div>
    ))}
      
    <button onClick={() => setFriends([...friends,"Kamil"])}>Add New Friend</button>
    
    <hr />
    <br></br>
    <div>{address.title} {address.country} </div>
    <button onClick={() => setAddress({...address,title:"Marselle",})}>Change Address</button>


    </div>
  )*/
}

export default App;
