import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <span className="text">{props.phonetic.text}</span>
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
