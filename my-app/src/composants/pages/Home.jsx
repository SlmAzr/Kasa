import React from 'react';
import Navbar from '../Navbar';
import Banniere from '../Banniere';
import AppsGrid from "../AppsGrid";
import Main from "../Main";
import Footer from '../Footer';

import "./Home.scss"


function Home() {
  return (
    <div>
     
      <Main> 
      <Banniere />
      <AppsGrid/>
      </Main>
 
     
    </div>
  )
}

export default Home