import React from "react";
import Navbar from "./components/ui/navbar";
import Content from "./components/content/content";
import "./assets/scss/app.scss";
function App() {
  return (
    <div className="main_layout">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
