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
import {colors, media, sharedStyles} from 'theme';
import loadScript from 'utils/loadScript';
import createOgUrl from 'utils/createOgUrl';
import {babelURL} from 'site-constants';
import bookLoverSvg from 'images/book_lover.svg';
import {keys, split} from 'lodash';

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
        <div css={{width: '100%'}}>
          <header
            css={{
              backgroundColor: colors.white,
              color: colors.dark,
            }}>
            <div
              css={{
                paddingTop: 45,
                paddingBottom: 20,

                [media.greaterThan('small')]: {
                  paddingTop: 60,
                  paddingBottom: 70,
                },

                [media.greaterThan('xlarge')]: {
                  paddingTop: 95,
                  paddingBottom: 85,
                  maxWidth: 1500, // Positioning of background logo
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  position: 'relative',
                  '::before': {
                    content: ' ',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    backgroundImage: `url(${bookLoverSvg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 50px',
                    backgroundSize: '33% auto',
                    // opacity: 0.05,
                  },
                },
              }}>
              <div
                css={{
                  // Content should be above absolutely-positioned hero image
                  position: 'relative',
                  [media.greaterThan('medium')]: {
                    marginLeft: 150,
                  },
                }}>
                <Container>
                  <h1
                    css={{
                      color: colors.black,
                      textAlign: 'left',
                      margin: 0,
                      fontSize: 45,
                      letterSpacing: '0.01em',
                      [media.size('xsmall')]: {
                        fontSize: 30,
                      },
                      [media.greaterThan('xlarge')]: {
                        fontSize: 60,
                      },
                    }}>
                    Welcome to my blog
                  </h1>
                  <p
                    css={{
                      paddingTop: 15,
                      textAlign: 'left',
                      fontSize: 24,
                      letterSpacing: '0.01em',
                      fontWeight: 200,

                      [media.size('xsmall')]: {
                        fontSize: 16,
                        maxWidth: '12em',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      },

                      [media.greaterThan('xlarge')]: {
                        paddingTop: 20,
                        fontSize: 30,
                      },
                    }}>
                    A JavaScript library for building user interfaces
                  </p>
                  <Flex
                    valign="center"
                    css={{
                      paddingTop: 40,

                      [media.greaterThan('xlarge')]: {
                        paddingTop: 65,
                      },
                    }}>
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
                </Container>
              </div>
            </div>
          </header>

          <Container>
            <div css={sharedStyles.markdown}>
              <section
                css={[
                  sectionStyles,
                  {
                    [media.lessThan('medium')]: {
                      marginTop: 0,
                      marginBottom: 0,
                      overflowX: 'auto',
                      paddingTop: 30,
                      WebkitOverflowScrolling: 'touch',
                      position: 'relative',
                      maskImage:
                        'linear-gradient(to right, transparent, white 10px, white 90%, transparent)',
                    },
                  },
                ]}>
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'row',

                    [media.lessThan('medium')]: {
                      display: 'block',
                      whiteSpace: 'nowrap',
                    },
                  }}>
                  {keys(data).map((type, index) => (
                    <div
                      key={index}
                      css={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '0 1 33%',
                        marginLeft: 40,

                        '&:first-of-type': {
                          marginLeft: 0,

                          [media.lessThan('medium')]: {
                            marginLeft: 10,
                          },
                        },

                        [media.lessThan('medium')]: {
                          display: 'inline-block',
                          verticalAlign: 'top',
                          marginLeft: 0,
                          whiteSpace: 'normal',
                          width: '75%',
                          marginRight: 20,
                          paddingBottom: 40,

                          '&:first-of-type': {
                            marginTop: 0,
                          },
                        },
                      }}>
                      <Link
                        css={{
                          backgroundColor: 'unset !important',
                          color: colors.black + '!important',
                          paddingTop: 0,
                          fontWeight: 600,
                          border: 'none !important',
                          fontSize: 24,
                        }}
                        key={data[type].edges[0].node.fields.slug}
                        to={data[type].edges[0].node.fields.slug}>
                        {data[type].edges[0].node.frontmatter.title}
                      </Link>
                      <div
                        css={{
                          marginTop: 10,
                          marginBottom: 20,
                        }}>
                        in
                        <Link
                          css={{
                            borderBottom: '1px solid #ececec',
                            ':hover': {
                              borderBottomColor: colors.black,
                            },
                            marginLeft: 5,
                            textTransform: 'capitalize',
                          }}
                          key={type}
                          to={type}>
                          {type}
                        </Link>
                      </div>
                      <div
                        css={{
                          color: colors.subtle,
                        }}>
                        {split(data[type].edges[0].node.html, /<[^>]*>/g, 2)[1]}
                        ...
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <hr
                css={{
                  height: 1,
                  marginBottom: -1,
                  border: 'none',
                  borderBottom: `1 solid ${colors.divider}`,
                }}
              />
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
  <div
    css={{
      // width: '50%',

      [media.between('small', 'large')]: {
        paddingLeft: 20,
      },

      [media.greaterThan('xlarge')]: {
        // paddingLeft: 40,
      },

      '&:first-child': {
        textAlign: 'left',
        paddingRight: 15,
      },

      '&:nth-child(2)': {
        [media.greaterThan('small')]: {
          paddingLeft: 15,
        },
      },
    }}>
    {children}
  </div>
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

const sectionStyles = {
  marginTop: 20,
  marginBottom: 15,

  [media.greaterThan('medium')]: {
    marginTop: 60,
    marginBottom: 65,
  },
};
