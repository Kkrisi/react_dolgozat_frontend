import React from 'react'
export default function Fejlec(props){
    return(
        <tr>
            {Object.entries(props.szakdoga).map(([kulcs, value ]) => {
                if(kulcs !== "rating"){
                    return <th key={kulcs}>{kulcs}</th>
                } else {
                    return (null)
                }
            })}
            <th></th>
            <th></th>
        </tr>
    );
}