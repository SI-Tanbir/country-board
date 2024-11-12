export default function Country({ country }) {
    const { name, languages, area,flags } = country;
    console.log(country); // Log languages to see the structure
  
    return (
      <div style={{border:'1px solid grey',
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
      </div>
    );
  }
  