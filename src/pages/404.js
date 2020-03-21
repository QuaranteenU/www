import React from "react"

import ContainerLayout from "../components/container-layout"
import SEO from "../components/seo"
import Button from "react-bootstrap/Button";
import showBSOD from "../util/bsod.js"

const NotFoundPage = () => (
  <ContainerLayout>
    <SEO title="Page not found" />
    <h1 className="fontalicious">😔 Aww</h1>
    <p>Unfortunately, we didn't have the budget to create the page you were looking for. However, I did find this button our developer left behind in the source code. Not too sure what it does...</p>
    <Button variant="danger" onClick={showBSOD}>DO NOT CLICK</Button>
  </ContainerLayout>
)

export default NotFoundPage
