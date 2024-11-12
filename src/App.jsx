import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Countries from './countries/Countries';


function App() {


  let [country,setCountry]=useState([]);

  useEffect(()=>{

    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setCountry(data)
    }
      )
  },[])
 

  return (
    <div>
    
     <h1>Country board</h1>

     <Countries country={country}></Countries>

    



     </div>
  )
}

export default App
