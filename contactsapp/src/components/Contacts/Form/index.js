import {useEffect, useState} from 'react'

const initialFormValues={name:"",phonenumber:""};

function Form({addContact ,contacts}) {
    const[form,setForm]=useState(initialFormValues)

    useEffect(()=>{
        setForm(initialFormValues)

    },[contacts])
    
    const onChangeInput=((e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    })
    
    const onSubmit=(e)=>{
        e.preventDefault();
        if(form.name==="" || form.phonenumber===""){
            return false;

        }
        addContact([...contacts,form])
        
    
    };
  return (
    <form onSubmit={onSubmit}>
        <div>
        <input name="name" value={form.name} placeholder='Full name' onChange={onChangeInput}/> 
        </div>
        <div>
        <input name="phonenumber" value={form.phonenumber} placeholder='Phone number' onChange={onChangeInput}/> 
        </div>
        <div>
            <button>Add</button>
        </div>

    </form>
  )
}

export default Form