import {colors, media} from 'theme';

export const footer = {
  backgroundColor: colors.brander,
  color: colors.white,
  paddingTop: 10,
  paddingBottom: 50,

  [media.size('sidebarFixed')]: {
    paddingTop: 40,
  },
};

export const footerContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

export const footerWithSideBar = {
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

export const footerWithoutSideBar = {
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

export const footerWrapper = {
  flexWrap: 'wrap',
  display: 'flex',

  [media.lessThan('large')]: {
    width: '100%',
  },
  [media.greaterThan('xlarge')]: {
    width: 'calc(100% / 3 * 2)',
    paddingLeft: 40,
  },
};

export const footerLogo = {
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

export const logoWithSideBar = {
  [media.greaterThan('large')]: {
    order: -1,
    width: null,
  },
};

export const logoWithoutSideBar = {
  [media.greaterThan('large')]: {
    order: -1,
    width: 'calc(100% / 3)',
  },
};

export const logoWrapper = {
  display: 'flex',
  alignItems: 'center',

  [media.lessThan('large')]: {
    justifyContent: 'center',
  },
};

export const logoImg = {
  maxWidth: 100,
  height: 'auto',
};

export const logoText = {
  color: colors.white,
  marginLeft: 20,
  fontWeight: 700,
  fontSize: 50,
  lineHeight: '50px',
};

export const copyright = {
  color: colors.subtleOnDark,
  paddingTop: 15,
};

export const footerLink = {
  lineHeight: 2,
  ':hover': {
    color: colors.darker,
  },
};
