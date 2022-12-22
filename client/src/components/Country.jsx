import React from "react";


function Country(props) {

 
   

   return  <div className="card col-lg-3 country-card"  id="country-card" style={props.style}>
        <img className="flag"  name={props.naam} onClick={props.onclick} src={props.flag}/>
        <p className="country-name" id="country-name" style={props.nameStyle}>{props.name}</p>
        <p className="country-para" id="country-para" style={props.paraStyle}>Population: <span className="span" style={props.spanStyle}>{props.population}</span></p>
        <p className="country-para" id="country-para" style={props.paraStyle}>Region: <span className="span" style={props.spanStyle}>{props.region}</span></p>
        <p className="country-para" id="country-para" style={props.paraStyle}>Capital: <span className="span" style={props.spanStyle}>{props.capital}</span></p>
   </div>
}

export default Country