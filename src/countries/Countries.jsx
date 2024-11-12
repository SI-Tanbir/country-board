import Country from "../country/Country"

export default function Countries({country}){
//  console.log(country)

    return(
        <div>

        <h3>list of Country:{country.length}</h3>


        {
            country.map((result,index) => (    <Country key={index} country={result}></Country>))
        }

        </div>
    )
}