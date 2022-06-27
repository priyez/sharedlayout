import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Card = ({ item }) => {
  return (
    <motion.li
      layoutId={`item-${item}`}
      style={{
        width: "200px",
        height: "150px",
        borderRadius: "5px",
        backgroundColor: "darkseagreen",
        listStyle: "none",
        textAlign: "center"
      }}
    >
      <Link to={`/page-${item}/`}>
        <p>Item #{item}</p>
      </Link>
    </motion.li>
  )
}

export default Card
