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
import createOgUrl from 'utils/createOgUrl';
import {keys} from 'lodash';
import {colors, media, sharedStyles} from 'theme';

import iconBanner from 'images/icon_banner.svg';
import bgBanner from 'images/bg_banner.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({
      screenWidth: window.innerWidth,
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const {data, location} = this.props;

    return (
      <Layout location={location}>
        <TitleAndMetaTags
          title="An &ndash; Blog học tiếng Anh."
          ogUrl={createOgUrl('index.html')}
        />
        <div css={[layoutWrapper]}>
          <header css={[header]}>
            <div
              css={[
                bannerContainer,
                {
                  [media.lessThan('medium')]: {
                    height: '400px !important',
                  },
                  [media.greaterThan('medium')]: {
                    height: this.state.screenWidth / 1.85 || 'unset',
                  },
                },
              ]}>
              <div css={[introContainer]}>
                <Flex css={[introWrapper]}>
                  <h1 css={title}>Discover another way to learn English</h1>
                  <p css={[description]}>
                    Learning English is not difficult like you thought.
                  </p>
                  <Flex valign="center" css={[buttonsWrapper]}>
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
              <section css={[sectionStyles, blogSection]}>
                <div css={blogWrapper}>
                  {keys(data).map((type, index) => (
                    <div key={index} css={postWrapper}>
                      <Link
                        css={[postTitle]}
                        key={data[type].edges[0].node.fields.slug}
                        to={data[type].edges[0].node.fields.slug}>
                        {data[type].edges[0].node.frontmatter.title}
                      </Link>
                      <div css={[category]}>
                        in
                        <Link css={[categoryLink]} key={type} to={type}>
                          {type}
                        </Link>
                      </div>
                      <div
                        css={[postDescription]}
                        dangerouslySetInnerHTML={{
                          __html: data[type].edges[0].node.html,
                        }}
                      />
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
  <div css={ctaItem}>{children}</div>
);

const layoutWrapper = {
  width: '100%',
};

const header = {
  backgroundColor: colors.white,
  color: colors.darkBlue,
  position: 'relative',
  '::before': {
    content: ' ',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage: `url(${bgBanner})`,
    backgroundRepeat: 'no-repeat',
    [media.greaterThan('medium')]: {
      backgroundSize: '100% auto',
    },
    [media.size('medium')]: {
      backgroundSize: '100% 400px !important',
    },
  },
};

const bannerContainer = {
  paddingTop: 100,
  paddingBottom: 50,
  display: 'flex',
  justifyContent: 'center',
  [media.greaterThan('small')]: {
    paddingTop: 120,
    paddingBottom: 70,
  },

  [media.greaterThan('medium')]: {
    justifyContent: 'flex-start',
    paddingTop: 95,
    paddingBottom: 85,
    maxWidth: 1500, // Positioning of background logo
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    '::before': {
      content: ' ',
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 50,
      [media.lessThan('large')]: {
        top: 0,
      },
      [media.greaterThan('large')]: {
        top: 60,
      },
      backgroundImage: `url(${iconBanner})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '100% 50px',
      backgroundSize: '45% auto',
    },
  },
};

const introContainer = {
  // Content should be above absolutely-positioned hero image
  position: 'relative',
  alignSelf: 'center',

  [media.greaterThan('medium')]: {
    width: '55%',
    marginBottom: 50,
    padding: '0 50px 0 100px',
  },
};

const introWrapper = {
  flexDirection: 'column !important',
  alignItems: 'center !important',

  [media.greaterThan('medium')]: {
    alignItems: 'flex-start !important',
  },
};

const title = {
  color: colors.white,
  textAlign: 'center',
  margin: 0,
  fontSize: 35,
  letterSpacing: '0.01em',
  [media.size('xsmall')]: {
    fontSize: 25,
  },
  [media.greaterThan('medium')]: {
    textAlign: 'left',
  },
  [media.greaterThan('xlarge')]: {
    fontSize: 50,
  },
};

const description = {
  color: colors.white,
  paddingTop: 15,
  textAlign: 'center',
  fontSize: 24,
  letterSpacing: '0.01em',
  fontWeight: 200,

  [media.size('xsmall')]: {
    fontSize: 16,
    maxWidth: '12em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  [media.greaterThan('medium')]: {
    textAlign: 'left',
  },
  [media.greaterThan('xlarge')]: {
    paddingTop: 20,
    fontSize: 30,
  },
};

const buttonsWrapper = {
  paddingTop: 40,

  [media.greaterThan('xlarge')]: {
    paddingTop: 65,
  },
};

const sectionStyles = {
  marginTop: 20,
  marginBottom: 15,

  [media.greaterThan('medium')]: {
    marginTop: 60,
    marginBottom: 65,
  },
};

const blogSection = {
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
};

const blogWrapper = {
  display: 'flex',
  flexDirection: 'row',

  [media.lessThan('medium')]: {
    display: 'block',
    whiteSpace: 'nowrap',
  },
};

const postWrapper = {
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
};

const postTitle = {
  backgroundColor: 'unset !important',
  color: colors.black + '!important',
  paddingTop: 0,
  fontWeight: 600,
  border: 'none !important',
  fontSize: 24,
};

const category = {
  marginTop: 10,
  marginBottom: 20,
};

const categoryLink = {
  borderBottom: '1px solid #ececec',
  ':hover': {
    borderBottomColor: colors.black,
  },
  marginLeft: 5,
  textTransform: 'capitalize',
};

const postDescription = {
  '& > *': {
    display: 'none',
  },

  '& > p:first-child': {
    display: 'unset',
    color: colors.subtle,
    fontSize: '16px !important',
    fontWeight: '400 ! important',

    '& > strong': {
      fontSize: '16px !important',
      fontWeight: '400 ! important',
    },
  },
};

const ctaItem = {
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
};

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
