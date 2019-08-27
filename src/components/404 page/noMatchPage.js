import React from "react"

// import { Container } from './styles';

const noMatchPage = ({ location }) => (
  <div className="page404">
    <h1>404 page not found</h1>
    <code>no match found for {location.pathname}</code>
  </div>
)

export default noMatchPage
