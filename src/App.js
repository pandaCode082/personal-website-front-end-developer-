import React from "react";
import Header from "./Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      {React.createElement("h1", { class: "text-4xl text-center font-bold" }, "test create element with react")}
    </div>
  );
}

export default App;
