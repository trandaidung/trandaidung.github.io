/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Flex from 'components/Flex';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {graphql, Link} from 'gatsby';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import loadScript from 'utils/loadScript';
import createOgUrl from 'utils/createOgUrl';
import {babelURL} from 'site-constants';
import {keys, split} from 'lodash';
import * as style from './HomePageStyles';
import {sharedStyles} from 'theme';

class Home extends Component {
  state = {
    babelLoaded: false,
  };

  componentDidMount() {
    loadScript(babelURL).then(
      () => {
        this.setState({
          babelLoaded: true,
        });
      },
      error => {
        console.error('Babel failed to load.');
      },
    );
  }

  render() {
    const {babelLoaded} = this.state;
    const {data, location} = this.props;

    return (
      <Layout location={location}>
        <TitleAndMetaTags
          title="React &ndash; A JavaScript library for building user interfaces"
          ogUrl={createOgUrl('index.html')}
        />
        <div css={[style.layoutWrapper]}>
          <header css={[style.header]}>
            <div css={[style.bannerContainer]}>
              <div css={[style.introContainer]}>
                <Flex css={[style.introWrapper]}>
                  <h1 css={style.title}>Welcome to my blog</h1>
                  <p css={[style.description]}>
                    A JavaScript library for building user interfaces
                  </p>
                  <Flex valign="center" css={[style.buttonsWrapper]}>
                    <CtaItem>
                      <ButtonLink
                        to="/docs/getting-started.html"
                        type="primary">
                        Bài viết nổi bật
                      </ButtonLink>
                    </CtaItem>
                    <CtaItem>
                      <ButtonLink to="/tutorial/tutorial.html" type="secondary">
                        Tất cả bài viết
                      </ButtonLink>
                    </CtaItem>
                  </Flex>
                </Flex>
              </div>
            </div>
          </header>

          <Container>
            <div css={sharedStyles.markdown}>
              <section css={[style.sectionStyles, style.blogSection]}>
                <div css={style.blogWrapper}>
                  {keys(data).map((type, index) => (
                    <div key={index} css={style.postWrapper}>
                      <Link
                        css={[style.postTitle]}
                        key={data[type].edges[0].node.fields.slug}
                        to={data[type].edges[0].node.fields.slug}>
                        {data[type].edges[0].node.frontmatter.title}
                      </Link>
                      <div css={[style.category]}>
                        in
                        <Link css={[style.categoryLink]} key={type} to={type}>
                          {type}
                        </Link>
                      </div>
                      <div css={[style.postDescription]}>
                        {split(data[type].edges[0].node.html, /<[^>]*>/g, 2)[1]}
                        ...
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* <hr
                css={{
                  height: 1,
                  marginBottom: -1,
                  border: 'none',
                  borderBottom: `1 solid ${colors.divider}`,
                }}
              /> */}
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  data: PropTypes.shape({
    vocabulary: PropTypes.object.isRequired,
    grammar: PropTypes.object.isRequired,
    communication: PropTypes.object.isRequired,
  }).isRequired,
};

const CtaItem = ({children, primary = false}) => (
  <div css={style.ctaItem}>{children}</div>
);

export const pageQuery = graphql`
  query IndexMarkdown {
    vocabulary: allMarkdownRemark(
      limit: 1
      filter: {fileAbsolutePath: {regex: "/vocabulary/"}}
      sort: {fields: [fields___date], order: DESC}
    ) {
      edges {
        node {
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
    grammar: allMarkdownRemark(
      limit: 1
      filter: {fileAbsolutePath: {regex: "/grammar/"}}
      sort: {fields: [fields___date], order: DESC}
    ) {
      edges {
        node {
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
    communication: allMarkdownRemark(
      limit: 1
      filter: {fileAbsolutePath: {regex: "/communication/"}}
      sort: {fields: [fields___date], order: DESC}
    ) {
      edges {
        node {
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default Home;
