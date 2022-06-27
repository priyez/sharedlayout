import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page one" />
    <motion.div layoutId={`item-1`} style={{ backgroundColor: "darkseagreen" }}>
      <h1>Hi from page one</h1>
      <p>Welcome to page one</p>
      <Link to="/">Go back to the homepage</Link>
    </motion.div>
  </Layout>
)

export default SecondPage
