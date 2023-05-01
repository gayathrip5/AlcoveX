import "./App.css";
import { useState } from "react";

const api = {
  key: "ae9f20111a8ea2716636e18fa12ba99a",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    document.getElementById("element").style.display = "none";
    document.getElementById("element1").style.display = "none";

    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
   
  return (
   
    <div className="App">
    <header className="App-header">
       
        <div>
            {/* <div class="desktop"></div> */}
            <div class="group8"></div>
            <div class="group6"></div>

            <div class="rectangle2"></div>

            <div class="group7"></div>
            <input type="text" placeholder="Enter city/town..." class="rectangle3" onChange={(e)=>
            setSearch(e.target.value)}
            />
            <div class="rectangle4"></div>
            <button onClick={searchPressed} class="rectangle4">Get Weather</button>
        </div>

        {/* If weather is not undefined display results from API */}
        <div class="group2"></div>
            <div class="rectangle1"></div>
            <div class="weatherapp">The Weather App</div>

            <div class="temperature" id="element">temperature°C</div>
            <div class="location" id="element1">city</div>

        {typeof weather.main !== "undefined" ? (
        <div>
            {/* <div class="group2"></div>
            <div class="rectangle1"></div> */}
            <div class="temperature">{weather.main.temp}°C</div>
            <div class="location">{weather.name}</div>
            {/* <div class="weatherapp">The Weather App</div> */}
 
        </div>
          ) : (
            ""
          )}
         
        
         
    </header>
</div>
 
  );
}

export default App;






//sample template
      //   { /* HEADER */}
      //   <h1>Weather App</h1>

      //   { /*  Search box */}
      //   <div>
      //     <input type='text'
      //       placeholder='enter your city or town'
      //       onChange={(e) => setSearch(e.target.value)} />
      //     <button onClick={searchPressed}>Search</button>
          
      //   </div>

      //   { /*  Loacation */}
      //  <p>New york city,usa</p>

      //   {/* temperature f/c */}
      //   <p> 32  F</p>

      //   { /* condition (Sunny) */}
      //   <p>sunny</p>

   