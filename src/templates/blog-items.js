import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const Blog = ({ data, ...props }) => (
  console.log(data),
  console.log(props),
  (
    <Layout>
      <h1>{data.datoCmsBlog.title}</h1>
      <p>{data.datoCmsBlog.intro}</p>
    </Layout>
  )
)

export default Blog

// TODO CLEANUP
/*export const query = graphql`
  query ($url: String!) {
    allDatoCmsBlog(url: { eq: $url }) {
      edges {
        node {
            id
          title
          url
            intro
        }
      }
    }
  }
`*/

export const query = graphql`
  query MyQuery($slug: String) {
      datoCmsBlog(url: { eq: $slug }) {
      id
      title
      intro
      url
    }
  }
`
