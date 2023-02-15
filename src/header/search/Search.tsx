import React from "react";
import "./Search.module.css"

function Search () {
    return (
        <div className="searchDiv">
            <a href="" className="searchLink">

             <svg  className="searchIcon" width="15" height="16" viewBox="0 0 28 29" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M11,-0.0001 C17.0751322,-0.0001 22,4.92476775 22,10.9999 C22,13.5276632 21.1473793,15.8562862 19.7140404,17.7138664 L28,26 L25,29 L16.518046,20.5178339 C14.8960209,21.4602385 13.0110328,21.9999 11,21.9999 C4.92486775,21.9999 0,17.0750322 0,10.9999 C0,4.92476775 4.92486775,-0.0001 11,-0.0001 Z M11,2.5 C6.30557963,2.5 2.5,6.30557963 2.5,11 C2.5,15.6944204 6.30557963,19.5 11,19.5 C15.6944204,19.5 19.5,15.6944204 19.5,11 C19.5,6.30557963 15.6944204,2.5 11,2.5 Z"></path></svg>
            <span> Search BBC</span>

            </a>
        </div>
    )
}

export default Search