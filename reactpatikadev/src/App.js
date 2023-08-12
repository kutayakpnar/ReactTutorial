
import './App.css';
import Header from './components/header';
import User from './components/user';


const name="Kutay"; //Değişkenden veri almak
const surname="Akpınar";
const isLogin=false;



function App(){
  return (
    <div>

      <User name="Mehmet" surname="Akpınar" isLoggedin={true} 
      friends={["Ahmet","Tayfun","Gökhan","Ayşe","Fatma"]} address={{
        title:"Balıkesir",
        country:"Turkey"
      }}
        
        />  
       
    </div> //header componentini çalıştırdık.
  );

}

export default App; //App componenti index.jsde kullanılıyor.
