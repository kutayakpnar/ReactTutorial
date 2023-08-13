import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function User() {
    const[user,setUser]=useState({})
    let {id}=useParams();

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>setUser(res.data))
    },[])
  return (
    <div>
        <h1>User Detail</h1>
        <pre>
        <code>
            {JSON.stringify(user)}
        </code>
        </pre>

    
    </div>
  )
}

export default User;