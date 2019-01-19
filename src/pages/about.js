/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import React from 'react';
import {sharedStyles} from 'theme';
import AboutImage from 'images/about.jpg';
import {colors} from 'theme';

type Props = {
  location: Location,
};

const About = ({location}: Props) => (
  <Layout location={location}>
    <Container>
      <div css={[sharedStyles.articleLayout.container, aboutStyle]}>
        <div css={sharedStyles.articleLayout.content}>
          <h1 css={[title]}>Một chút về An</h1>
          <TitleAndMetaTags title="React - Page Not Found" />
          <div css={[sharedStyles.markdown, contentWrapper]}>
            <p>
              Slack is the collaboration hub that brings the right people
              together with all the right information and tools to get work
              done. Launched in 2014, Slack is the fastest-growing business
              application in history. Millions of people around the world use
              Slack to connect their teams, unify their systems, and drive their
              business forward. From Fortune 100 companies to corner markets,
              Slack helps people communicate better.
            </p>
            <img css={[aboutImage]} src={AboutImage} alt="About An" />
            <p>
              Connect your conversations with the tools and services that you
              use to get the job done. With over 1,500 apps and a robust API,
              the Slack platform team works with partners and developers
              globally to build apps and integrations that streamline your work,
              automate mundane tasks and bring context into your conversations
              in Slack.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

const aboutStyle = {
  textAlign: 'center',
  justifyContent: 'center',
};

const title = {
  color: colors.darkBlue,
  fontSize: 60,
  lineHeight: '65px',
  fontWeight: 700,
};

const contentWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > p': {
    fontSize: '24px !important',
  },
};

const aboutImage = {
  margin: 50,
  width: '75%',
  height: 'auto',
};

export default About;
