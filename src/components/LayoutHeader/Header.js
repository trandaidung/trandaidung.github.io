/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import HeaderLink from './HeaderLink';
import * as style from './HeaderStyles';
import {Link} from 'gatsby';
import React from 'react';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';

import logoSvg from 'icons/logo.svg';

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

    let headerType;
    if (isHomePage && isTop) {
      headerType = style.whiteHeader;
    } else {
      headerType = style.normalHeader;
    }

    return (
      <header css={[headerType, style.header]}>
        <Container>
          <div css={[style.container]}>
            <Link css={[style.logoWrapper]} to="/">
              <img src={logoSvg} alt="" height="30" />
              <span css={[style.logoText]}>an</span>
            </Link>

            <nav css={[style.nav]}>
              <HeaderLink
                isActive={location.pathname.includes('/vocabulary')}
                title="Vocabulary"
                to="/vocabulary/"
              />
              <HeaderLink
                isActive={location.pathname.includes('/grammar')}
                title="Grammar"
                to="/grammar/"
              />
              <HeaderLink
                isActive={location.pathname.includes('/communication')}
                title="Communication"
                to="/communication/"
              />
            </nav>

            <div css={[style.channelNav]}>
              <a
                css={[style.channelItem]}
                href="https://github.com/facebook/react/"
                target="_blank"
                rel="noopener">
                Facebook
                <ExternalLinkSvg cssProps={[style.externalLinkSvg]} />
              </a>
            </div>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
