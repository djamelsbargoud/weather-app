import React, {Component} from 'react';
import Form from './componenet/Form';
import Weather from './componenet/Weather';
const API_KEY = "d1e12a36051bda0765affebd3100af98"


class App extends Component {
  state ={
    temperature:"",
    city:"",
    paye:"",
    humidity:"",
    error:""
  }
  getWeather = async (e) => {
    e.preventDefault()
    const country = e.target.elements.country.value
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}`)
    const data = await api.json()
    if (country){
      this.setState ({
      temperature:data.main.temp,
      city:data.name,
      paye:data.sys.country,
      humidity:data.main.humidity,
      error:data.cod
    })
    }else{
      this.setState ( {
        temperature:"",
        city:"",
        paye:"",
        humidity:"",
        error:data.cod
      })
      
    }
  }
  render(){
    return (
        <div className="App">
          <Form getWeather={this.getWeather}/>
          <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.paye}
            humidity={this.state.humidity}
            error={this.state.error}
          />
        </div>
    );
  }
}
export default App