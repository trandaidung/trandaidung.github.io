/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import {Link} from 'gatsby';
import React from 'react';
import * as style from './FooterStyles';

import type {Node} from 'react';

type Props = {
  children: Node,
  target?: string,
  to: string,
};

const FooterLink = ({children, target, to}: Props) => (
  <Link css={[style.footerLink]} to={to} target={target}>
    {children}
  </Link>
);

export default FooterLink;
