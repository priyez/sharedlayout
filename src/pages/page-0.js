import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page zero" />
    <motion.div
      layoutId={`item-0`}
      style={{ width: "100%", backgroundColor: "darkseagreen" }}
    >
      <h1>Hi from page zero</h1>
      <p>Welcome to page zero</p>
      <Link to="/">Go back to the homepage</Link>
    </motion.div>
  </Layout>
)

export default SecondPage
