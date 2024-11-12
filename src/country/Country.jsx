export default function Country({ country }) {
    const { name, languages, area } = country;
    console.log(languages); // Log languages to see the structure
  
    return (
      <div>
        <h3>Name: {name.common}</h3>
        <h4>Area: {area} km²</h4>
        <h4>Languages:</h4>
        
        <ul>
    
          {languages &&
            Object.values(languages).map((language, index) => (
              <li key={index}>{language}</li> 
            ))}
        </ul>
      </div>
    );
  }
  