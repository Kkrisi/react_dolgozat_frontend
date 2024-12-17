import React from 'react'
import { ApiContext } from '../../contexts/ApiContext'
import { useState, useContext } from "react";

export default function UjSzakdoga(){
    const {postData, kategoriaData} = useContext(ApiContext);
    console.log(kategoriaData);
    const [szakdoga, setSzakdoga] = useState({
        szakdoga_nev: "",
        githublink: "",
        oldallink: "",
        tagokneve: ""
    });

    {/*function gombKezeles(){
        event.preventDefault();
        postData("/szakdogak",szakdoga);
    }

    return(
        <form onSubmit={(event)=>{gombKezeles(event);}}>
            <div classname="mb-3">
                <label htmlFor="">Szakdolgozat címe</label>
                <input type="text" required onChanges={event}/>
                ide még kell további kód
            </div>
        </form>
    )*/}
}