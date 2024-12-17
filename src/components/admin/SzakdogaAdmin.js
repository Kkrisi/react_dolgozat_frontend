import React from 'react'


export default function SzakdogaAdmin(props){
    console.log("props:",props)
    console.log("props.szakdogak:",props.szakdogak)
    return(
        <div className="col">
            <ul className="row">
                <li>{props.szakdogak.szakdoga_nev}</li>
                <li>{props.szakdogak.githublink}</li>
                <li>{props.szakdogak.oldallink}</li>
                <li>{props.szakdogak.tagokneve}</li>
            </ul>
        </div>
    )



    {/*function torol(){
        console.log(torol);
    }

    function modosit(){
        console.log(modosit)
    }

    return(
        <tr>
            {Object.entries(props.szakdoga).map(([kulcs, value ]) => {
                if(kulcs !== "rating"){
                    return <th key={kulcs}>{kulcs}</th>
                } else if (kulcs !== 'szakdoga_nev'){
                    return <td key={kulcs}>{value}</td>
                } else {
                    return (null);
                }
            })}

            <td>
                <button className="btn btn-outline-primary" onClick={()=>{modosit(props.szakdoga.id);}}>Szerkeszt</button>
            </td>

        </tr>
    );  */}
}