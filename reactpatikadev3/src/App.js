import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import { useState,useEffect } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const[ısVısıble,setIsVısıble]=useState(true);
  return (<div>
    {ısVısıble && <Counter/>}
    <button onClick={()=>setIsVısıble(!ısVısıble)}>Toggle</button>
  </div>
   
  );
}

export default App;
