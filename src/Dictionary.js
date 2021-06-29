import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
  let [keyword, setKeyword]= useState (props.defaultKeyword);
  let [results, setResults]= useState (null);
  let [loaded, setLoaded]= useState (false);

  function handleResponse (response){
    setResults(response.data[0]);
  }

  function search (){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function load (){
    setLoaded(true)
    search();
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
      }
  function handleKeywordChange (event){
    setKeyword(event.target.value);
  }
if (loaded){
  return(
    <div className="Dictionary">
      <section>
        <h2 className="hero-text">Dictionary</h2>
        <div className="search-dictionary row">
            <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">What does</span>
              <input type="search" onChange={handleKeywordChange} className="input form-control" placeholder="sunrise"></input>
              <button className="btn btn-outline-secondary" type="button">mean🧐</button>
            </div>      
            </form>
            <div className="hint">
              suggested words: sunset, wine, yoga, forest...
            </div>
          </div>
        </section>
      
      <Results results={results}/>
      
    </div>
  )}else{
    load();
  return null;  }
}