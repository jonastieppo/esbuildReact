import React from "react";
import "./areas.module.css"


function Area ({area}) {
    return (
        <div className="areasDiv">
            <a href="" className="areas">
                {area}
            </a>
        </div>
    )
}


function Areas ({ areas }) {

    console.log('areas.length :', areas.length);
    console.log('areas.length :', areas);

    
    return (
        areas.map(area =>{
            return <Area area={area}></Area>
        })
    )
}

export default Areas