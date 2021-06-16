
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
      <form onSubmit={handleForm}>
        <input className="form-control" type="search" onChange={handleKeywordChange}></input>
        <button className="btn btn-secondary">Search</button>
      </form>
    </div>
  )
}