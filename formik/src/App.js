
import { Formik, Field, Form } from 'formik';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: 'Kutay',
        lastName: 'Akpınar',
        email: 'xyz@gmail.com',
        gender:'Male',
        hobies:[],
        country:"tr"
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
     {
      ({handleSubmit,handleChange,values})=>(
        <Form onSubmit={handleSubmit} >
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" value={values.firstName} onChange={handleChange}></input>

        <br/>

        <label htmlFor="lastname">Last Name</label>
        <input name="lastname" value={values.lastName} onChange={handleChange}></input>
        <br/>

        <label htmlFor="email">Email</label>
        <input name="email" value={values.email}  onChange={handleChange}></input>
        <br/>
        <br/>
        
        <span>Male</span>
        <input type="radio" name="gender" value="male" onChange={handleChange}></input>
        <span>Female</span>
        <input type="radio" name="gender" value="female" onChange={handleChange}></input>
        <br/>
        <br/>
          <div>
            FOOTBALL
          <input type='checkbox' name='hobies' value="Play Football" onChange={handleChange}/>
          </div>
          <div>
            CINEMA
          <input type='checkbox' name='hobies' value="Cinema" onChange={handleChange}/>
          </div>
          <div>
            Photography
          <input type='checkbox' name='hobies' value="Photography" onChange={handleChange}/>
          </div>
          <br/>
        <br/>
        <select name="country" value={values.country} onChange={handleChange}>
        <option value="tr">TURKEY</option>
        <option value="eu">EU</option>
        <option value="us">us</option>
        </select>


        <br/>
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <br/>

        {JSON.stringify(values)}
      </Form>
      )
     }
    </Formik>
     
    </div>
  );
}

export default App;
