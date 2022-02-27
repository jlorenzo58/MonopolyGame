import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
const AddPlayers = () =>{
    const [playersAdded, setPlayersAdded] = useState(0);  
    const incrementCounter = () => setPlayersAdded(playersAdded + 1);

    const addPlayer = () => {
        console.log(playersAdded); 
        incrementCounter(); 
        //setPlayersAdded(playersAdded); 
        
    }

    return(
        <Fragment>
        <button onClick = {addPlayer}>Add Player!</button>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Players Added: </h1> {playersAdded}
        </Fragment>
    );
}
export default AddPlayers;