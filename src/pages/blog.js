import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const BlogPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
  
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
    return (
      <Layout>
        <h3>Blog Posts</h3>
        <div className="grids">
          {Posts}
        </div>
      </Layout>
    )
  }

export default BlogPage;
export const query = graphql`
  query blogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
