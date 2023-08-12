import React, { useState } from 'react'

function InputExample() {
    //const[name,setName]=useState("");
    //const[surname,setsurname]=useState("");
    const[form,setForm]=useState({name:"",surname:""})
    const onChangeInput=(event)=>{
    console.log(event.target.name)
    setForm({...form,[event.target.name]: event.target.value})
}

  return (
    <div>Please Enter a name:<br></br> 
    <input name="name" value={form.name} onChange={onChangeInput}/> 
    <br></br>
    Please Enter a surname:<br></br> 
    <input name="surname" value={form.surname} onChange={onChangeInput}/> 
    <br></br>
    {form.name} {form.surname}
    </div>
  )
}

export default InputExample;