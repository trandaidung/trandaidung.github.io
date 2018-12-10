// @flow

import React from 'react';
import AllBlogPosts from 'components/AllBlogPosts';
import type {allMarkdownRemarkData} from 'types';
import {graphql} from 'gatsby';

type Props = {
  data: allMarkdownRemarkData,
  location: Location,
};

const AllCommunicationPosts = ({data, location}: Props) => (
  <AllBlogPosts blogType={'communication'} data={data} location={location} />
);

export const pageQuery = graphql`
  query AllCommunicationPostsPageQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/communication/"}}
      sort: {fields: [fields___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            author {
              frontmatter {
                name
                url
              }
            }
          }
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;

export default AllCommunicationPosts;
