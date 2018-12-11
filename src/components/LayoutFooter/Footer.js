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
import * as style from './FooterStyles';

import ossLogoPng from 'icons/logo.svg';

const Footer = ({layoutHasSidebar = false}: {layoutHasSidebar: boolean}) => {
  const footerContainerStyle = !layoutHasSidebar
    ? style.footerWithSideBar
    : style.footerWithoutSideBar;
  const logoStyle = !layoutHasSidebar
    ? style.logoWithSideBar
    : style.logoWithoutSideBar;
  return (
    <footer css={[style.footer]}>
      <Container>
        <div css={[style.footerContainer, footerContainerStyle]}>
          <div css={[style.footerWrapper]}>
            <FooterNav layoutHasSidebar={layoutHasSidebar}>
              <MetaTitle onDark={true}>Categories</MetaTitle>
              <FooterLink to="/vocabulary/">Vocabulary</FooterLink>
              <FooterLink to="/grammar/">Grammar</FooterLink>
              <FooterLink to="/communication/">Communication</FooterLink>
            </FooterNav>
            <FooterNav layoutHasSidebar={layoutHasSidebar}>
              <MetaTitle onDark={true}>Others</MetaTitle>
              <FooterLink to="/grammar/">About me</FooterLink>
              <ExternalFooterLink
                href="https://www.facebook.com/react"
                target="_blank"
                rel="noopener">
                Facebook
              </ExternalFooterLink>
            </FooterNav>
          </div>
          <section css={[style.footerLogo, logoStyle]}>
            <a
              css={[style.logoWrapper]}
              href="https://code.facebook.com/projects/"
              target="_blank"
              rel="noopener">
              <img alt="an" css={[style.logoImg]} src={ossLogoPng} />
              <span css={[style.logoText]}>an</span>
            </a>
            <p css={[style.copyright]}>Copyright © 2018 Thao An.</p>
          </section>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
