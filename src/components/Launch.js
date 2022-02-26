import React, { useState, Fragment } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import "./Launch.css"

const Launch = () =>{

    const [redirect, setRedirect] = useState(false);

    if(redirect){

    }

    return(
        <Fragment>
            <img src="https://i.imgur.com/JhyDh0M.png" class="center" width="50%" alt ="monopoly" /> 
            <div class="container1">
                <button class="center" id="button1"> CREATE NEW GAME </button>
            </div>
            <br />
            <br />
            <table cellspacing="0" cellpadding="0" width="50%">
                <tr>
                    <td><img src="https://cdn.imgbin.com/5/5/6/imgbin-white-house-monopoly-monopoly-s-QDb0A19CSkkgvsM2za9bmVhhs.jpg" class="bottomLeft" width ="100%" alt="green house" /> </td>
                    <td><img src="https://cdn.imgbin.com/5/5/6/imgbin-white-house-monopoly-monopoly-s-QDb0A19CSkkgvsM2za9bmVhhs.jpg" class="bottomLeft" width ="100%" alt="green house" /> </td>
                    <td><img src="https://cdn.imgbin.com/5/5/6/imgbin-white-house-monopoly-monopoly-s-QDb0A19CSkkgvsM2za9bmVhhs.jpg" class="bottomLeft" width ="100%" alt="green house" /> </td>
                    <td><img src="https://cdn.imgbin.com/5/5/6/imgbin-white-house-monopoly-monopoly-s-QDb0A19CSkkgvsM2za9bmVhhs.jpg" class="bottomLeft" width ="100%" alt="green house" /> </td>
                </tr>
            </table>
            </Fragment>
    );
}

export default Launch;