const blogFragment = `
on edges {
  node {
      id
      title
      url
  }
               
`
const createBlogs = (nodes, createPage, template) =>
    nodes.map((node, index) => {
        if (node) {
            createPage({
                path: `${node.node.url}`,
                title: node.node.title,
                alias: node.node.url,
                component: template,
                context: {
                    title: node.node.title,
                    alias: node.node.url,
                },
            })
        }
    })
module.exports = { blogFragment, createBlogs }
