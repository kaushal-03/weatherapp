import logo from './logo.svg';
import './App.css';
import react,{useState} from "react";
import axios from 'axios';


function App()
{
  const [data,setdata]=useState({});
  const [location,setLocation] = useState("");
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cbe74900f5cae956c2f59bf4b72f7fa8`;
  function getvalue(event)
  {
    setLocation(event.target.value);
  }
  const searchLocation = async(event) =>
  {
    if(event.key === 'Enter')
    {
      axios.get(url).then
      (
        (response)=>{
          setdata(response.data);
          console.log(response.data);
        }
      )
    }

  }
  return(
    <div className='app'>
   <div className='container'>
      <div className='top'>
      <div className='location'><h1>kollam</h1></div>
          <div className='data'>
            <div className='temp'>{data.main ? <p>{data.main.temp}</p> : null}</div>
            <input onKeyPress={searchLocation}name='input' onChange={(event) => setLocation(event.target.value)} placeholder='Enter the city'></input>
          </div>
      
    <div className='bottom'>
    <div className='feels'><p>65°F</p></div>
    <div className='humidity'><p>20%</p></div>
    <div classsName='windspeed'><p>1.24 MPH</p></div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
