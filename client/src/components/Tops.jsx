import React, { useState } from "react";
import { ReactDOM } from "react";



function Card(props) {


    return <div className="container-fluid ">
       <button className="btn btn-warning back-btn" onClick={props.onClick}>  Go Back  </button>
        <div className="container-fluid row top-row">
        <div className="img-div col-lg-6">
       <center><img src={props.flag} className="info-img" /></center> 
        </div>
          <div className="details-div col-lg-6 row">
          <p className="info-name" style={props.nameStyle}>{props.name}</p>
          <div className="info-div col-lg-6">
          <p className="info-para" style={props.paraStyle}>Native Name: <span style={props.spanStyle}> {props.nativeName}</span> </p>
          <p className="info-para" style={props.paraStyle}>Population: <span style={props.spanStyle}> {props.population}</span></p>
          <p className="info-para" style={props.paraStyle}>Region: <span style={props.spanStyle}> {props.region}</span></p>
          <p className="info-para" style={props.paraStyle}>Sub Region: <span style={props.spanStyle}> {props.subRegion}</span></p>
          <p className="info-para" style={props.paraStyle}>Capital: <span style={props.spanStyle}> {props.capital}</span></p>

          </div>
          <div className="info-div col-lg-6 info-div2">
          <p className="info-para" style={props.paraStyle}>Top level domain: <span style={props.spanStyle}> {props.topLevelDomain}</span></p>
          <p className="info-para" style={props.paraStyle}>Currencies: <span style={props.spanStyle}> {props.currencies}</span></p>
          <p className="info-para" style={props.paraStyle}>Languages: <span style={props.spanStyle}> {props.languages}</span></p>
          </div>
          <p className="border-para" style={props.paraStyle}>Border Countries: <button className="border-button btn btn-dark btn-md">{props.neighbourOne}</button> <button className="border-button btn btn-dark btn-md">{props.neighbourTwo}</button> <button className="border-button btn btn-dark btn-md">{props.neighbourThree}</button> </p>

          </div>
        </div>
        
    </div>
}

export default Card;

{/*  */}


//Workks fine
// var lol = [props.data];
// var clicked = false;

// function handleClick(event){


//     const {name,value} = event.target;
//     lol.filter(newArray => {
//     newArray.forEach(country =>{
        
//         if (country.region === name){
//         props.filters(country)
//         };
//     })
//       });
 
//     }
// setData(prevCountries=>{
//     return prevCountries.filter(newCountries =>{
//       return  newCountries.region === name
//     })
// })


// else if (isClicked) {
//     setData(prevCountries=>{
//         return prevCountries.filter(newCountries=>{
//             return newCountries.region !== name
//         })
//     })
//     setClick(false)
//  }