import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import Main from '../Main'
import "./ErrorPage.scss"

function ErrorPage() {
  return (
    <> 
    {/* <Navbar/> */}
    <Main>
    <div className="ErrorContent">
        <h1>404</h1>
        <h2>Oops! la page que vous demandez n'existe pas</h2>
        <Link to="/">Retourner sue la page d'accueil</Link>
    </div>
    </Main>
    </>
  )
}

export default ErrorPage