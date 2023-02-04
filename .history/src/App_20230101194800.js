import React from "react";

function Food(props){
  console.log(props);
  return <h1>I love {props.fav}</h1>
}

function App() {
  return (
    <div>
      <h1>HEllo</h1>
      <Food fav="kimch"/>
    </div>
  );
}

export default App;
