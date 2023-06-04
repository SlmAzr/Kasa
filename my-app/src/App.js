import React from 'react';
import Navbar from './composants/Navbar';
import Banniere from './composants/Banniere';
import AppsGrid from "./composants/AppsGrid";
import Main from "./composants/Main";
import Footer from './composants/Footer';

import "./App.css"


function App() {
  return (
    <div>
      <Navbar />
      <Main> 
      <Banniere />
      <AppsGrid/>
      </Main>
      <Footer/>
     
    </div>
  )
}

export default App