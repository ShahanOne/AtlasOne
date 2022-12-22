import React, { useState ,useEffect} from "react";
import Country from "./Country.jsx";
import Card from "./Tops.jsx";
import Footer from "./Footer.jsx";

function App() {

const [data,setData] = React.useState(null);
const [isClicked,setClick] = React.useState(false);
const [filterName,setFilter] = React.useState(null);
const [region,setRegion] = React.useState([]);
const [isTheme,setTheme] = React.useState(false);
const [cardClick,setCard]= React.useState(false);
const [country,setCountry] = React.useState("");
const [input,setInput] = React.useState("");
const [searchedCountry,setSearchedCountry] = React.useState("")

React.useEffect(()=>{
fetch("/api")
.then((res)=> res.json())
.then((data)=> setData(data));

},[]);

//Theme
function handleTheme(){
  setTheme(value => !value)
  if (!isTheme) {document.getElementById("footer").style="background-color: #406882" ;document.getElementById("main-div").style="background-color : hsl(0, 0%, 98%)"; document.getElementById("top-bar").style="background-color : hsl(0, 0%, 100%)"; document.getElementById("where-to").style="color : hsl(200, 15%, 8%)"; document.getElementById("search-input").style="background-color : hsl(0, 0%, 100%); border-color: hsl(0, 0%, 100%); color: hsl(200, 15%, 8%)"; document.getElementById("dropbtn").style="background-color : hsl(0, 0%, 100%); color: hsl(200, 15%, 8%)"; document.getElementById("drop-content").style="background-color : #151D3B";
} else {document.getElementById("footer").style=""; document.getElementById("main-div").style=""; document.getElementById("top-bar").style=""; document.getElementById("where-to").style=""; document.getElementById("search-input").style=""; document.getElementById("dropbtn").style=""; document.getElementById("drop-cotent").style="";document.getElementById("drop-content").style="" }
}

//Card Search
function handleInput(event){
  const {value} = event.target;
  setInput(value)
}
function handleSearchClick() {
  data.filter(searchedCountry=>{
    if(searchedCountry.name === input.charAt(0).toUpperCase() + input.slice(1)){
      setSearchedCountry(searchedCountry);
    } else if(!input){
      setSearchedCountry("")
    } 
  })
  setInput("")
}
console.log(searchedCountry);
//Cards loading
function handleAllOver(){
  setTimeout(()=>setRegion([]),1000)
}

function handleOver(event) {
  const {name,value} = event.target;
  setFilter(name);
}

  function handleClick(){
   setClick(value => !value);
    data.filter(newArray=>{
          if (newArray.region === filterName){
            setRegion(prevRegion=> [...prevRegion, newArray]);
          }
          
        })       
}

//Card panel
function handleCard(event){
 setCard(true)
  const {name} = event.target
data.filter(newCountry=>{
  if (newCountry.name === name){
    setCountry(newCountry)
    console.log(newCountry);
  }
}) 
}
function handleBack() {
  setCard(false)
}

const light = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>

const dark = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars" viewBox="0 0 16 16">
<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg>

  return (
   <div className="container-fluid main-div" id="main-div" >

  <div className="top-bar container-fluid" id="top-bar">

    <p className="where-to" id="where-to">Where in the world?</p>
    <button className="btn btn-outline-warning dark-btn" id="dark-btn" onClick={handleTheme}> {isTheme? <p className="theme-para">{light} Light</p> :<p className="theme-para">{dark} Dark</p>}</button>
  </div>

  {!cardClick ? <div>

  <div className="top-search">
    <div className="search-div input-group">

      <input type="text"  className="form-control search-input" id="search-input" value={input} onChange={handleInput} placeholder="Search for a country..." autoComplete="none" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-secondary go-btn" type="submit" onClick={handleSearchClick} id="button-addon2">{!searchedCountry? <img src="search.svg"/>: "Go Back"}</button>
    
    </div>

 <div className="dropdown">
      <button className="dropbtn" id="dropbtn">Filter by region</button>
      <div className="dropdown-content" id="drop-content">

    {!isClicked? <div>
      <button className="dropdown-item"  onMouseOver={handleOver} onClick={handleClick} name="Africa" type="button">Africa</button>
      <button className="dropdown-item"  onMouseOver={handleOver} onClick={handleClick} name="Americas" type="button">Americas</button>
      <button className="dropdown-item"  onMouseOver={handleOver} onClick={handleClick} name="Asia" type="button">Asia</button>
      <button className="dropdown-item"  onMouseOver={handleOver} onClick={handleClick} name="Europe" type="button">Europe</button>
      <button className="dropdown-item"  onMouseOver={handleOver} onClick={handleClick} name="Oceania" type="button">Oceania</button>
      </div> : <div><button className="dropdown-item" onMouseDown={handleAllOver} onClick={handleClick} name="Africa" type="button">All Countries</button></div> }
     </div>
  </div>

    </div>

 <div className="card-parent row">

      {!data? <div><img className="loading" src="loading.gif"/></div>: searchedCountry? <Country onclick={handleCard} naam={searchedCountry.name} style={isTheme ?{ backgroundColor : "hsl(0, 0%, 100%)"} : {}} paraStyle={isTheme ?{ color : "hsl(200, 15%, 8%)"} : {}} spanStyle={isTheme ?{ color : "hsl(0, 0%, 52%)"} : {}} nameStyle={isTheme ?{ color : "hsl(200, 15%, 8%)"} : {}} flag={searchedCountry.flags.png} name={searchedCountry.name} population={searchedCountry.population} region={searchedCountry.region} capital={searchedCountry.capital} /> : !isClicked? data.map((newCountry,index)=> <Country onclick={handleCard} naam={newCountry.name} key={index} style={isTheme ?{ backgroundColor : "hsl(0, 0%, 100%)"} : {}} paraStyle={isTheme ?{ color : "hsl(200, 15%, 8%)"} : {}} spanStyle={isTheme ?{ color : "hsl(0, 0%, 52%)"} : {}} nameStyle={isTheme ?{ color : "hsl(200, 15%, 8%)", fontWeight: "700"} : {}} flag={newCountry.flags.png} name={newCountry.name} population={newCountry.population} region={newCountry.region} capital={newCountry.capital}
         />
        ): region.map((newCountry,index)=> <Country onclick={handleCard} naam={newCountry.name} key={index} style={isTheme ?{ backgroundColor : "hsl(0, 0%, 100%)"} : {}} paraStyle={isTheme ?{ color : "hsl(200, 15%, 8%)"} : {}} spanStyle={isTheme ?{ color : "hsl(0, 0%, 52%)"} : {}} nameStyle={isTheme ?{ color : "hsl(200, 15%, 8%)"} : {}} flag={newCountry.flags.png} name={newCountry.name} population={newCountry.population} region={newCountry.region} capital={newCountry.capital}
         />  )
      }  </div>
      </div> : <Card onClick={handleBack} flag={country.flags.png} name={country.name} nativeName={country.nativeName} population={country.population} region={country.region} subRegion={country.subregion} capital={country.capital} currencies={country.currencies? country.currencies[0].name: ""} languages={country.languages? country.languages[0].name: ""} topLevelDomain={country.topLevelDomain? country.topLevelDomain:""} neighbourOne={country.borders?country.borders[0]:""} neighbourTwo={country.borders?country.borders[1]:""} neighbourThree={country.borders?country.borders[2]:""} nameStyle={isTheme ?{ color : "hsl(200, 15%, 8%)"} : {}} paraStyle={isTheme ?{ color : "hsl(200, 15%, 8%)"} : {}} spanStyle={isTheme ?{ color : "hsl(0, 0%, 52%)"} : {}}/>}
    <Footer/>
    </div>
   
  );
  
}

export default App;

