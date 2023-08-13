import {useEffect,useState} from 'react'
import axios from 'axios';

function Users() {

    const[users,setUsers]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    //Native fetch 
    /** 
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json()).then((data)=>
        {   
            setUsers(data);
            setIsLoading(false)
        });
    },[]) */
    //Axios

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res)=>
        {   
            setUsers(res.data);
            setIsLoading(false)
        });
    },[])
  return (
    <div>
        <h1>Users</h1>

        {isLoading && <div>Loading..</div>};

        {users.map((user,i)=>
        {return <div key={i}>{user.name}</div>
        })
        }
        
    </div>
  )
}

export default Users