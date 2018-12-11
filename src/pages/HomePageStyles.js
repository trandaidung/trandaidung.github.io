import {colors, media} from 'theme';
import bookLoverSvg from 'images/book_lover.svg';

export const layoutWrapper = {
  width: '100%',
};

export const header = {
  backgroundColor: colors.white,
  color: colors.dark,
};

export const bannerContainer = {
  paddingTop: 45,
  paddingBottom: 20,
  display: 'flex',
  justifyContent: 'center',
  [media.greaterThan('small')]: {
    paddingTop: 60,
    paddingBottom: 70,
  },

  [media.size('large')]: {
    height: '500px !important',
  },

  [media.size('medium')]: {
    height: '400px !important',
  },

  [media.greaterThan('medium')]: {
    justifyContent: 'flex-start',
    paddingTop: 95,
    paddingBottom: 85,
    maxWidth: 1500, // Positioning of background logo
    height: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    '::before': {
      content: ' ',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundImage: `url(${bookLoverSvg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '100% 50px',
      backgroundSize: '45% auto',
    },
  },
};

export const introContainer = {
  // Content should be above absolutely-positioned hero image
  position: 'relative',
  alignSelf: 'center',

  [media.greaterThan('medium')]: {
    width: '55%',
    marginBottom: 50,
    padding: '0 50px 0 100px',
  },
};

export const introWrapper = {
  flexDirection: 'column !important',
  alignItems: 'center !important',

  [media.greaterThan('medium')]: {
    alignItems: 'flex-end !important',
  },
};

export const title = {
  color: colors.black,
  textAlign: 'right',
  margin: 0,
  fontSize: 45,
  letterSpacing: '0.01em',
  [media.size('xsmall')]: {
    fontSize: 30,
  },
  [media.greaterThan('xlarge')]: {
    fontSize: 60,
  },
};

export const description = {
  paddingTop: 15,
  textAlign: 'right',
  fontSize: 24,
  letterSpacing: '0.01em',
  fontWeight: 200,

  [media.size('xsmall')]: {
    fontSize: 16,
    maxWidth: '12em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  [media.greaterThan('xlarge')]: {
    paddingTop: 20,
    fontSize: 30,
  },
};

export const buttonsWrapper = {
  paddingTop: 40,

  [media.greaterThan('xlarge')]: {
    paddingTop: 65,
  },
};

export const sectionStyles = {
  marginTop: 20,
  marginBottom: 15,

  [media.greaterThan('medium')]: {
    marginTop: 60,
    marginBottom: 65,
  },
};

export const blogSection = {
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

export const blogWrapper = {
  display: 'flex',
  flexDirection: 'row',

  [media.lessThan('medium')]: {
    display: 'block',
    whiteSpace: 'nowrap',
  },
};

export const postWrapper = {
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

export const postTitle = {
  backgroundColor: 'unset !important',
  color: colors.black + '!important',
  paddingTop: 0,
  fontWeight: 600,
  border: 'none !important',
  fontSize: 24,
};

export const category = {
  marginTop: 10,
  marginBottom: 20,
};

export const categoryLink = {
  borderBottom: '1px solid #ececec',
  ':hover': {
    borderBottomColor: colors.black,
  },
  marginLeft: 5,
  textTransform: 'capitalize',
};

export const postDescription = {
  color: colors.subtle,
};

export const ctaItem = {
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
