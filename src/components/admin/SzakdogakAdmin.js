import React from 'react'
import Fejlec from "./Fejlec";
import SzakdogaAdmin from "./SzakdogaAdmin";


export default function SzakdogakAdmin(props){
    return(

        <table className="table table-stripped">

            <thead>
                <Fejlec szakdoga={props.szakdoga[0]}/>
            </thead>


            <tbody>
                {props.szakdogak.map((szakdoga)=>{
                    console.log("props.szakdoga map",props.szakdoga)
                    return <SzakdogaAdmin szakdoga={szakdoga} key={szakdoga.id}/>
                })}
            </tbody>

        </table>

    );
}