/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import MetaTitle from 'templates/components/MetaTitle';
import React from 'react';
import {colors, media} from 'theme';
import ossLogoPng from 'icons/logo.svg';

const Footer = ({layoutHasSidebar = false}: {layoutHasSidebar: boolean}) => {
  const footerContainerStyle = !layoutHasSidebar
    ? footerWithSideBar
    : footerWithoutSideBar;
  const logoStyle = !layoutHasSidebar ? logoWithSideBar : logoWithoutSideBar;
  return (
    <footer css={[footer]}>
      <Container>
        <div css={[footerContainer, footerContainerStyle]}>
          <div css={[footerWrapper]}>
            <FooterNav layoutHasSidebar={layoutHasSidebar}>
              <MetaTitle onDark={true}>Categories</MetaTitle>
              <FooterLink to="/vocabulary/">Vocabulary</FooterLink>
              <FooterLink to="/grammar/">Grammar</FooterLink>
              <FooterLink to="/communication/">Communication</FooterLink>
            </FooterNav>
            <FooterNav layoutHasSidebar={layoutHasSidebar}>
              <MetaTitle onDark={true}>Others</MetaTitle>
              <FooterLink to="/about/">About me</FooterLink>
              <ExternalFooterLink
                href="https://www.facebook.com/react"
                target="_blank"
                rel="noopener">
                Facebook
              </ExternalFooterLink>
            </FooterNav>
          </div>
          <section css={[footerLogo, logoStyle]}>
            <a css={[logoWrapper]} href="/" rel="noopener">
              <img alt="an" css={[logoImg]} src={ossLogoPng} />
              <span css={[logoText]}>an</span>
            </a>
            <p css={[copyright]}>Copyright © 2018 Thao An.</p>
          </section>
        </div>
      </Container>
    </footer>
  );
};

const footer = {
  backgroundColor: colors.brander,
  color: colors.white,
  paddingTop: 10,
  paddingBottom: 50,

  [media.size('sidebarFixed')]: {
    paddingTop: 40,
  },
};

const footerContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const footerWithSideBar = {
  [media.between('small', 'medium')]: {
    paddingRight: null,
  },

  [media.between('large', 'largerSidebar')]: {
    paddingRight: null,
  },
  [media.between('largerSidebar', 'sidebarFixed', true)]: {
    paddingRight: null,
  },
};

const footerWithoutSideBar = {
  [media.between('small', 'medium')]: {
    paddingRight: 240,
  },

  [media.between('large', 'largerSidebar')]: {
    paddingRight: 280,
  },
  [media.between('largerSidebar', 'sidebarFixed', true)]: {
    paddingRight: 380,
  },
};

const footerWrapper = {
  flexWrap: 'wrap',
  display: 'flex',
  flex: 1,

  [media.lessThan('large')]: {
    width: '100%',
  },
  [media.greaterThan('xlarge')]: {
    width: 'calc(100% / 3 * 2)',
    paddingLeft: 40,
  },
};

const footerLogo = {
  paddingTop: 40,
  display: 'block !important', // Override 'Installation' <style> specifics

  [media.greaterThan('xlarge')]: {
    width: 'calc(100% / 3)',
    order: -1,
  },
  [media.lessThan('large')]: {
    textAlign: 'center',
    width: '100%',
    paddingTop: 40,
  },
};

const logoWithSideBar = {
  [media.greaterThan('large')]: {
    order: -1,
    width: null,
  },
};

const logoWithoutSideBar = {
  [media.greaterThan('large')]: {
    order: -1,
    width: 'calc(100% / 3)',
  },
};

const logoWrapper = {
  display: 'flex',
  alignItems: 'center',

  [media.lessThan('large')]: {
    justifyContent: 'center',
  },
};

const logoImg = {
  maxWidth: 100,
  height: 'auto',
};

const logoText = {
  color: colors.white,
  marginLeft: 20,
  fontWeight: 700,
  fontSize: 50,
  lineHeight: '50px',
};

const copyright = {
  color: colors.subtleOnDark,
  paddingTop: 15,
};

export default Footer;
