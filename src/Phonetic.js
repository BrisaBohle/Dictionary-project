import React from "react";
import "./Phonetic.css";

export default function Phonetics(props){
  return(
  <div className="Phonetic">
    <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Play</a>
    <span>{props.phonetic.text}</span>
    
  </div>
  );
}