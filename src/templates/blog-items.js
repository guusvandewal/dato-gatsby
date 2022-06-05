import React from "react"
import { Link, graphql } from "gatsby"
import Markdown from "markdown-to-jsx"

import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Blog({ data }) {
  console.log(data)
  const query = data.datoCmsBlog
  const image = getImage(query.media.gatsbyImageData)
  return (
    <Layout>
      <h1>{query.title}</h1>
      <Markdown>{query.intro}</Markdown>
      <br />
      <br />
      <GatsbyImage image={image} alt={query.media.alt} />

      {/* <div>{data.datoCmsBlog.media}</div>*/}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    datoCmsBlog(id: { eq: $id }) {
      id
      title
      intro
      url
      media {
        gatsbyImageData
        alt
      }
    }
  }
`
