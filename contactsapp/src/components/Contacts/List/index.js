import {useState} from 'react'

function List({contacts}) {
    const[filtertext,setFilterText]=useState("");
    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key)=>{
            return item[key].toString().toLowerCase().includes(filtertext.toLowerCase())
        })
    })

    console.log(filtered);

  return (
    <div> 

        <input placeholder='Filter Contact' value={filtertext} onChange={(e)=>setFilterText(e.target.value)}></input>
        <ul>
            {
                filtered.map((contact,i)=>(<li key={i}>{contact.name} </li>))
            }
        </ul>
        

    </div>
  )
}

export default List;