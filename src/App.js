import React from "react";
import NavbarHead from "./components/ui/navbar";
import Content from "./components/content/content";
import Footer from "./components/ui/footer";
import Model from "./components/ui/model";
import "./assets/scss/app.scss";
function App() {
  return (
    <div className="main_layout">
      <NavbarHead />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
