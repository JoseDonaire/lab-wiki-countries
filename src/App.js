import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
  
 
      <div class="container">
        <div class="row">
        <Navbar />
          <CountriesList />
          <CountryDetails />
          <Routes>
            <Route
              path="/countrydetails/:country"
              element={<CountryDetails />}
            ></Route>
          </Routes>
        </div>
      </div>
  
  );
}

export default App;
