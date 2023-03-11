import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  const [location, setLocation] = useState("");
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cbe74900f5cae956c2f59bf4b72f7fa8`;
  function getvalue(event) {
    setLocation(event.target.value);
  }
  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
        console.log(response.data);
      });
    }
  };
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
            {data.main ? <p className="main">{data.main.temp} °F</p> : ""}
            <input
              onKeyPress={searchLocation}
              name="input"
              onChange={(event) => setLocation(event.target.value)}
              placeholder="🔍Enter the city"
              className='in'
            ></input>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          <h2> Feels Like</h2>
          {data.main ? <p>{data.main.feels_like}</p> :<p>----</p>}
          </div>
          <div className="humidity">
          <h2> Humidity</h2>
          {data.main ? <p>{data.main.humidity}%</p> : <p>----</p>}
          </div>
          <div classsName="windspeed">
          <h2> WindSpeed</h2>
          {data.main ? <p>{data.wind.speed}MPH</p> : <p>----</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
