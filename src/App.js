
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import List from './components/List';
import "bootstrap/dist/css/bootstrap.min.css"


  



function App() {
  const [data, setData]=  useState("");
  const [dark, setDark]= useState(false);


  
  
  var url= "https://pokeapi.co/api/v2/pokemon/";
 
  

  
  
  useEffect(()=>{
     axios.get(url).then((res)=>{
      setData(res.data);
    })
  
  
  },[])
  function changeTheme(){
    setDark(!dark);
  }
  const darktheme={
    backgroundColor: "black",
    color: "white"
  }
  const lighttheme={
    backgroundColor: "white",
    color: "black"
  }
 
  console.log(data);
  return (
    <div className="App" style= {!dark?lighttheme:darktheme}>
     
      <div id="header">
      <h1 >Pokemon </h1>
      <button onClick={changeTheme}>Toggle Theme</button>
      
      </div>
      <div id="listdiv">
      {data? <List data={data} setData={setData} />: ""}
      </div>
      
      
      
     
    </div>
  );
}

export default App;
