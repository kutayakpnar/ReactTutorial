import {useContext} from 'react'
import Button from './button';
import Header from './Header';
import ThemeContext from '../context/ThemeContext'

function Container() {
    const{theme}=useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}> 
        <Button/>
    <hr/>
    <Header/>
    </div>
  )
}

export default Container