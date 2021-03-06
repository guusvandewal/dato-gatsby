const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-items.js`)
  const result = await graphql(`
    query {
      allDatoCmsBlog {
        edges {
          node {
            id
            title
            url
          }
        }
      }
    }
  `)
  result.data.allDatoCmsBlog.edges.forEach(edge => {
    createPage({
      path: `${edge.node.url}`,
      title: `${edge.node.title}`,
      component: blogPostTemplate,
      context: {
        slug: `${edge.node.url}`,
        id: `${edge.node.id}`,
      },
      ownerNodeId: `${edge.node.id}`,
    })
  })
}
