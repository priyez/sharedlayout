import React from "react"
import Card from "./card"

const CardList = () => {
  return Array.from({ length: 3 }, (_, i) => <Card key={i} item={i} />)
}

export default CardList
