/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const { slugify } = require('./src/util/utilityFunctions');
const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const singlePostTemplate = path.resolve('./src/templates/posted.js');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error('Error fetching markdown data');
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: singlePostTemplate,
      context: {
        slug: node.fields.slug,
        location: {
          pathname:node.fields.slug,
        },
      },
    });
  });
};




// const { slugify } = require('./src/util/utilityFunctions');
// const path = require('path')

// exports.onCreateNode = ({node,actions}) =>{
//   const { createNodeField } = actions
//   if(node.internal.type === 'MarkdownRemark'){
//     const slugFromTitle = slugify(node.frontmatter.title)
//     createNodeField({
//       node,
//       name:'slug',
//       value: slugFromTitle,
//     })
//   }
// }

// exports.createPages = async ({ actions,graphql })=>{
//   const { createPage } = actions;
//   const singlePostTemplate = path.resolve('src/templates/posted.js')

//  const result = await graphql(`
//      {
//       allMarkdownRemark{
//         edges{
//           node{
//             frontmatter{
//               author
//               tags
//             }
//             fields{
//               slug
//             }
//           }
//         }
//       }
//      }
//   `).then(res =>{
//     if(res.errors) return Promise.reject(res.errors)

//     const posts =res.data.allMarkdownRemark.edges

//     posts.forEach(({node}) =>{
//       createPage({
//         path: node.fields.slug,
//         component: singlePostTemplate,
//         context: {
//           slug: node.fields.slug
//         }
//       })
//     })
//   })
// }


