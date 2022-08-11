import { useState } from "react"
import {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function CountryDetails() {

    const [countryDetails, setCountryDetails] =useState({})
    const [ isFetching, setIsFetching ] = useState(true)
    const {country} = useParams()


    useEffect(()=>{
        getCountryDetails()
    },[country])
    const getCountryDetails = async()=>{

        const data = await axios(`https://ih-countries-api.herokuapp.com/countries/${country}`)
        setCountryDetails(data.data)
        setIsFetching(false)
    }
    if (isFetching === true) {
        return 
      }



  return (
    <div>

       <h3>{countryDetails.name.official}</h3>
       <br />
        <h4>Capital:</h4>
       {countryDetails.capital}
       <br />
       <h4>Area</h4>
       {countryDetails.area}



    </div>



       /*
          <div Class="col-7">
            <h1>{countryDetails.name.official}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{countryDetails.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {countryDetails.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {countryDetails.map((eachCountry)=>{
                        return(
                            <li>
                                <Link to= {countryDetails.borders}>{eachCountry}</Link>
                            </li>
                        )
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>*/

  )
}

export default CountryDetails