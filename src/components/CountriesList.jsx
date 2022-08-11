import axios from "axios"
import { useState } from "react"
import{useEffect} from 'react'
import { Link } from "react-router-dom"

function CountriesList() {
    const[allCountries,setAllCountries]= useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(()=>{
        getAllContries()
    },[])

    const getAllContries = async ()=>{
        const data = await axios ('https://ih-countries-api.herokuapp.com/countries')
        console.log(data.data)
        setAllCountries(data.data)
        setIsFetching(false)
    }
    if (isFetching === true) {
        return <h3>... Loading</h3>
      }


  return (
    <div>
        {allCountries.map((eachCountry)=>{
            return(
                
                <li>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="" />
                <br />
                <Link to = {`/countrydetails/${eachCountry.alpha3Code}`}> {eachCountry.name.official}</Link>
               </li>
            )
        })}
    </div>
  )
}

export default CountriesList