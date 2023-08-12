import {useState} from "react";

function Counter(){
    const[sayac,setSayac]=useState(0);

    return <div>
        Counter
        <h1>{sayac}</h1>
        <button onClick={()=>setSayac(sayac+1)}>Inrease</button>
        <button onClick={()=>setSayac(sayac-1)}>Decrease</button>
        </div>

}


export default Counter;

