import React from "react"

import ContainerLayout from "../components/container-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <ContainerLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ContainerLayout>
)

export default NotFoundPage
