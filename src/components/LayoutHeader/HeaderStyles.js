import {colors, fonts, media} from 'theme';

export const header = {
  color: colors.white,
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  top: 0,
  left: 0,
  transition: 'background-color 0.3s linear',
};

export const whiteHeader = {
  backgroundColor: colors.white,
};

export const normalHeader = {
  backgroundColor: colors.darker,
};

export const container = {
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

export const logoWrapper = {
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

export const logoText = {
  color: colors.brand,
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

export const nav = {
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

export const channelNav = {
  [media.lessThan('medium')]: {
    display: 'none',
  },
  [media.greaterThan('large')]: {
    width: 'calc(100% / 6)',
  },
};

export const channelItem = {
  color: colors.dark,
  padding: '5px 10px',
  marginLeft: 10,
  whiteSpace: 'nowrap',
  ...fonts.small,

  ':hover': {
    color: colors.brand,
  },

  ':focus': {
    outline: 0,
    backgroundColor: colors.lighter,
    borderRadius: 15,
  },
};

export const externalLinkSvg = {
  marginLeft: 5,
  verticalAlign: -2,
  color: colors.subtle,
};
