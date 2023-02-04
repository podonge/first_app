import React from "react";

function Food({fav}){
  return <h1>I love {fav}</h1>
}

const foodLike = [];


function App() {
  return (
    <div>
      <h1>HEllo</h1>
      <Food fav="kimch"/>
    </div>
  );
}

export default App;
