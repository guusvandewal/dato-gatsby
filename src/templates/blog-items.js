import React from "react"
import { Link, graphql } from "gatsby"
import Markdown from "markdown-to-jsx"

import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"

export default function Blog({ data }) {
  console.log(data)
  const query = data.blogQuery1
  const structuredText = data.blogQuery1.structuredText
  const image = getImage(query.media.gatsbyImageData)
  return (
    <Layout>
      <h1>{query.title}</h1>
      <Markdown>{query.intro}</Markdown>
        <StructuredText data={structuredText} />
      <br />
      <br />
      <GatsbyImage image={image} alt={query.media.alt} />

      {/* <div>{data.datoCmsBlog.media}</div>*/}
    </Layout>
  )
}

export const query = graphql`
  query FragBlog($id: String) {
    blogQuery1: datoCmsBlog(id: { eq: $id }) {
      ...BlogItem
    }
      blogQuery2: datoCmsBlog(id: { eq: $id }) {
      ...BlogItem
    }
  }

  # Tthis fragment can be used everywhere
  fragment BlogItem on DatoCmsBlog {
    id
    title
    intro
    structuredText {
        value
    }
    url
    media {
      alt
      gatsbyImageData
    }
  }
`
