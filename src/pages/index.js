import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardList from "../components/card-list"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi from the homepage</h1>
    <p>Welcome to the homepage</p>
    <ul
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10px"
      }}
    >
      <CardList />
    </ul>
  </Layout>
)

export default IndexPage
