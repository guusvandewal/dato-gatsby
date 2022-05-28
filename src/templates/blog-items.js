import React from "react"
import { Link, graphql } from "gatsby"
import Markdown from 'markdown-to-jsx';

import Layout from "../components/layout"




export default function Blog({ data }) {
    console.log(data)
    //const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <h1>{data.datoCmsBlog.title}</h1>
            <p>{data.datoCmsBlog.intro}</p>
            <Markdown>{data.datoCmsBlog.intro}</Markdown>
        </Layout>
    )
}


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
  query MyQuery($id: String) {
      datoCmsBlog(id: { eq: $id }) {
      id
      title
      intro
      url
    }
  }
`
