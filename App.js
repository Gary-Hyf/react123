import React from 'react';
import './main.css';

import Header from "./model/header";
import Footer from "./model/footer";
import Toobar from "./model/toolbar";

function App() {
  return (
    <div className="weather-channel__container">
      <Header />  
      <Toobar />
      <Footer />
    </div>
  );
}

export default App;
