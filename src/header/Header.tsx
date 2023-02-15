import React from "react";
import "./Header.module.css"
import Areas from './areas/areas'
import SignIn from "./sign-in/signIn";
import Search from "./search/Search";

const divStyle = {
    display : 'flex'
    , backgroundColor : 'black'
    ,paddingTop : '1rem'
    ,paddingBottom : '1rem'
    , width : '100%'
}

const areas = ['Home', 'News', 'Sport', 'Reel', 'Worklife','Travel','Future','Culture']


function Header() {
    return (
    
    <div style={divStyle}>
        <div id="head-content" className="headContent">

                <header>
                    <a href="" id="bbc-homepage">
                        <img width={112} src="https://logos-download.com/wp-content/uploads/2016/06/BBC_logo_black_background.png" alt=""/>
                    </a>

                </header>
                <SignIn/>
                <Areas areas={areas}/>
                <Search/>

        </div>


    </div>)
}

export default Header