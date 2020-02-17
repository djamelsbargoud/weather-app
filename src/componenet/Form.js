import React from 'react';

const Form = (props) =>{
        return(
            <div>
                <form onSubmit={props.getWeather}>
                    <input type="text" name="country" placeholder="Country.."/><br/>
                    <button>Get Weather</button>                    
                </form>
            </div>
        );
}
 
export default Form