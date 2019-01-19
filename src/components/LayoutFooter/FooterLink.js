/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import {Link} from 'gatsby';
import React from 'react';
import {colors} from 'theme';
import type {Node} from 'react';

type Props = {
  children: Node,
  target?: string,
  to: string,
};

const FooterLink = ({children, target, to}: Props) => (
  <Link css={[footerLink]} to={to} target={target}>
    {children}
  </Link>
);

const footerLink = {
  lineHeight: 2,
  ':hover': {
    color: colors.yellow,
  },
};

export default FooterLink;
