import { useState } from "react";
import "./Country.css"

export default function Country({ country,visitedCountry }) {
    const { name, languages, area,flags } = country;
    // console.log(country); // Log languages to see the structure
    let [isGoing,setIsGoing]=useState(false)
    // visited funtion to check 
    function btnVisited(){
      setIsGoing(!isGoing)

    }
    
    // console.log(visitedCountry);
   
  
    return (
      <div className={isGoing ? 'visited':undefined} style={{border:'1px solid grey',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px',
        textAlign:'center'
      }}>

        <h3>Name: {name.common}</h3>
        <img src={flags.png} alt=""  width='200px'/>
        <h4>Area: {area} km²</h4>
       
       <div style={{display:'flex',
        justifyContent:'center'
       }}>

       <h4>Languages:</h4>
        
        <ul>
    
          {languages &&
            Object.values(languages).map((language, index) => (
              <li key={index}>{language}</li> 
            ))}
        </ul>

       </div>
       {/* adding btn here */}
       <button onClick={()=>visitedCountry(country)} >Mark visited</button>
       <br />

       <button onClick={btnVisited}>{isGoing ?'Visited':'Going'}</button>

      </div>
    );
  }
  