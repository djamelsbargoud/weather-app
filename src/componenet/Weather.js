import React from 'react'

const Weather  = (props) =>{
        return(
            <div>
                
                <h2>temperature :{props.temperature}</h2>
                <h2>city :{props.city}</h2>
                <h2>country :{props.country}</h2>
                <h2>humidity :{props.humidity}</h2>
                <h2>error :{props.error}</h2>
            </div>
        )
}
export default Weather