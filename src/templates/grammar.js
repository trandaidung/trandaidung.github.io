/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import React from 'react';
import {graphql} from 'gatsby';
import Layout from 'components/Layout';
import MarkdownPage from 'components/MarkdownPage';
import {createLinkBlog} from 'utils/createLink';

const toSectionList = allMarkdownRemark => [
  {
    title: 'Recent Posts',
    items: allMarkdownRemark.edges
      .map(({node}) => ({
        id: node.fields.slug,
        title: node.frontmatter.title,
      }))
      .concat({
        id: '/grammar/all.html',
        title: 'All posts ...',
      }),
  },
];

const Grammar = ({data, location}) => (
  <Layout location={location}>
    <MarkdownPage
      createLink={createLinkBlog}
      date={data.markdownRemark.fields.date}
      location={location}
      ogDescription={data.markdownRemark.excerpt}
      markdownRemark={data.markdownRemark}
      sectionList={toSectionList(data.allMarkdownRemark)}
      titlePostfix=" &ndash; An Blog"
    />
  </Layout>
);

export const pageQuery = graphql`
  query TemplateGrammarMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt(pruneLength: 500)
      frontmatter {
        title
      }
      fields {
        date(formatString: "MMMM DD, YYYY")
        path
        slug
      }
    }
    allMarkdownRemark(
      limit: 10
      filter: {fileAbsolutePath: {regex: "/grammar/"}}
      sort: {fields: [fields___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Grammar;
