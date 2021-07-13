import React from "react";

function Tickler() {
  function tickle(event) {
    console.log("TeeHee");
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
