import React from 'react';
import { graphql } from 'gatsby';

import Post from '../components/post';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(post => (
          <Post key={post.node.id} {...post} />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query postsQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          timeToRead
          html
        }
      }
    }
  }
`;

export default IndexPage;
