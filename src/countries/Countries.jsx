import { useState } from "react"
import Country from "../country/Country"
import './Countries.css'

export default function Countries({country}){
    const [visitedCountries,setVisitedCountries]=useState([])

//  console.log(country)
const visitedCountry=country=>{
    console.log('add this to your visited country')
    // console.log(country)
    const newVisitedCountries =[...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
} 

    return(
        <div>
            <h3>list of Country:{country.length}</h3>

            <h4>Visited Country:{visitedCountries.length}</h4>
            <ul>
                {
                    visitedCountries.map(country =><li key={country.cca3}>
                        {country.name.common}
                    </li>)
                }
            </ul>

            <div className="Country-container">
{
    country.map((result,index) => (    <Country visitedCountry={visitedCountry} key={index} country={result}></Country>))
}
            </div>

       

        </div>
    )
}