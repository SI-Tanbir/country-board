import Country from "../country/Country"
import './Countries.css'

export default function Countries({country}){
//  console.log(country)

    return(
        <div>
            <h3>list of Country:{country.length}</h3>
            <div className="Country-container">
{
    country.map((result,index) => (    <Country key={index} country={result}></Country>))
}
            </div>

       

        </div>
    )
}