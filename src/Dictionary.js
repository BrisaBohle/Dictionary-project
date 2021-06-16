
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, SetKeyword]= useState (null);

  function handleForm (event){
    event.preventDefault();
    console.log({keyword});

  }
  function handleKeywordChange (event){
    SetKeyword(event.target.value);
  }

  return(
    <div className="Dictionary">
      <h2 className="hero-text">Dictionary</h2>
      <div className="search-dictionary row">
        <form onSubmit={handleForm}>
         <div className="input-group mb-3">
            <span className="input-group-text">What does</span>
            <input type="search" onChange={handleKeywordChange} className="input form-control" placeholder="it"></input>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">mean🧐</button>
          </div>      
        </form>
      </div>
    </div>
  )
}