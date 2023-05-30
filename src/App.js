import React from "react";
import Navbar from "./components/ui/navbar";
import Content from "./components/content/content";
import Footer from "./components/ui/footer";
import "./assets/scss/app.scss";
function App() {
  return (
    <div className="main_layout">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
