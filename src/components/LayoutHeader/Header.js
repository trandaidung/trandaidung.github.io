/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import HeaderLink from './HeaderLink';
import {Link} from 'gatsby';
import React from 'react';
import {colors, fonts, media} from 'theme';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';

import mainLogoSvg from 'icons/logo.svg';
import externalLogoSvg from 'icons/external-logo.svg';

type Props = {
  location: Location,
};

type State = {
  isTop: boolean,
};

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isTop: true,
    };

    const self: any = this;
    self.handleScrolling = this.handleScrolling.bind(this);
  }

  componentDidMount() {
    this.setState({
      isTop: window.scrollY === 0,
    });

    window.addEventListener('scroll', this.handleScrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolling);
  }

  handleScrolling() {
    if (window.scrollY !== 0) {
      if (this.state.isTop) {
        this.setState({isTop: false});
      } else {
        return;
      }
    } else {
      this.setState({isTop: true});
    }
  }

  render() {
    const {location} = this.props;
    const {isTop} = this.state;

    const isHomePage =
      location.pathname === '/' || location.pathname === '/an/';

    let headerType, logoTextColor, whiteChannel, logoSvg;
    if (isHomePage && isTop) {
      headerType = transparentHeader;
      logoTextColor = logoTextWhite;
      whiteChannel = whiteText;
      logoSvg = externalLogoSvg;
    } else {
      headerType = normalHeader;
      logoTextColor = logoTextPurple;
      whiteChannel = null;
      logoSvg = mainLogoSvg;
    }

    return (
      <div css={[headerContainer]}>
        <header css={[headerType, header]}>
          <Container>
            <div css={[container]}>
              <Link css={[logoWrapper]} to="/">
                <img src={logoSvg} alt="" height="40" />
                <span css={[logoText, logoTextColor]}>an</span>
              </Link>

              <nav css={[nav]}>
                <HeaderLink
                  isActive={location.pathname.includes('/vocabulary')}
                  title="Vocabulary"
                  to="/vocabulary/"
                  whiteColor={isHomePage && isTop}
                />
                <HeaderLink
                  isActive={location.pathname.includes('/grammar')}
                  title="Grammar"
                  to="/grammar/"
                  whiteColor={isHomePage && isTop}
                />
                <HeaderLink
                  isActive={location.pathname.includes('/communication')}
                  title="Communication"
                  to="/communication/"
                  whiteColor={isHomePage && isTop}
                />
              </nav>

              <div css={[channelNav]}>
                <a
                  css={[channelItem, whiteChannel]}
                  href="/about/"
                  rel="noopener">
                  About me
                </a>
                <a
                  css={[channelItem, whiteChannel]}
                  href="https://github.com/facebook/react/"
                  target="_blank"
                  rel="noopener">
                  Facebook
                  <ExternalLinkSvg cssProps={[externalLinkSvg, whiteChannel]} />
                </a>
              </div>
            </div>
          </Container>
        </header>
      </div>
    );
  }
}

const headerContainer = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  top: 0,
  left: 0,
};
const header = {
  color: colors.white,
  transition: 'background-color 0.3s linear',
};

const transparentHeader = {
  backgroundColor: 'transparent',
};

const normalHeader = {
  backgroundColor: colors.white,
};

const container = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 60,
  [media.between('small', 'large')]: {
    height: 50,
  },
  [media.lessThan('small')]: {
    height: 40,
  },
};

const logoWrapper = {
  display: 'flex',
  marginRight: 10,
  height: '100%',
  alignItems: 'center',
  color: colors.brand,

  ':focus': {
    outline: 0,
    color: colors.white,
  },

  [media.greaterThan('small')]: {
    width: 'calc(100% / 6)',
  },
  [media.lessThan('small')]: {
    flex: '0 0 auto',
  },
};

const logoText = {
  marginLeft: 10,
  fontWeight: 700,
  fontSize: 20,
  lineHeight: '20px',
  [media.lessThan('large')]: {
    fontSize: 16,
    marginTop: 1,
  },
  [media.lessThan('small')]: {
    // Visually hidden
    position: 'absolute',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0,
  },
};
const logoTextWhite = {
  color: colors.white,
};
const logoTextPurple = {
  color: colors.brand,
};

const nav = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  overflowX: 'auto',
  overflowY: 'hidden',
  WebkitOverflowScrolling: 'touch',
  height: '100%',
  width: '60%',

  [media.size('xsmall')]: {
    flexGrow: '1',
    width: 'auto',
  },
  [media.greaterThan('xlarge')]: {
    width: null,
  },
  [media.lessThan('small')]: {
    maskImage:
      'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
  },
};

const channelNav = {
  [media.lessThan('medium')]: {
    display: 'none',
  },
  [media.greaterThan('large')]: {
    width: 'calc(100% / 6)',
  },
};

const channelItem = {
  color: colors.darkBlue,
  padding: '5px 10px',
  marginLeft: 10,
  whiteSpace: 'nowrap',
  ...fonts.small,

  ':hover': {
    color: colors.brand,
  },

  ':focus': {
    outline: 0,
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
  },
};

const externalLinkSvg = {
  marginLeft: 5,
  verticalAlign: -2,
  color: colors.subtle,
};

const whiteText = {
  color: colors.white,
};

export default Header;
