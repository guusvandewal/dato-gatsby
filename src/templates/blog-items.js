import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const Blog = ({ data }) => (
  <Layout>
    <h1>Recipes</h1>
    <ul>
      {data.allDatoCmsBlog.edges.map(({ node }) => (
        <li>{node.title}</li>
      ))}
    </ul>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allDatoCmsBlog {
      edges {
        node {
          title
        }
      }
    }
  }
`
