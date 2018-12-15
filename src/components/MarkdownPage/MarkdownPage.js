/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import Flex from 'components/Flex';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'templates/components/NavigationFooter';
import React from 'react';
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import findSectionForPath from 'utils/findSectionForPath';
import {sharedStyles} from 'theme';
import createOgUrl from 'utils/createOgUrl';
// $FlowFixMe
import axios from 'axios';
import {slackWebHook} from 'site-constants';
import type {Node} from 'types';
import {colors} from 'theme';
import {setCookie, getCookie} from 'utils/cookie';

type Props = {
  createLink: Function, // TODO: Add better flow type once we Flow-type createLink
  date?: string,
  enableScrollSync?: boolean,
  ogDescription: string,
  location: Location,
  markdownRemark: Node,
  sectionList: Array<Object>, // TODO: Add better flow type once we have the Section component
  titlePostfix: string,
};

type State = {
  liked: boolean,
};

const getPageById = (sectionList: Array<Object>, templateFile: ?string) => {
  if (!templateFile) {
    return null;
  }

  const sectionItems = sectionList.map(section => section.items);
  const flattenedSectionItems = [].concat.apply([], sectionItems);
  const linkId = templateFile.replace('.html', '');

  return flattenedSectionItems.find(item => item.id === linkId);
};

class MarkdownPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      liked: getCookie(`liked-${this.props.location.pathname}`) === 'liked',
    };
  }

  like() {
    const {location, markdownRemark} = this.props;

    this.setState({liked: true});
    axios
      .post(
        slackWebHook,
        JSON.stringify({
          attachments: [
            {
              title: markdownRemark.frontmatter.title || '',
              title_link: `https://www.thaoanvo.com${location.pathname}`,
              color: 'good',
              text: '*Yayyy!!* 1 person has just `like` your post.',
            },
          ],
        }),
      )
      .then(response => {
        setCookie(`liked-${location.pathname}`, 'liked', 365);
      })
      .catch(error => {
        console.log('FAILED: Send slack webhook', error);
      });
  }

  unlike() {
    const {location, markdownRemark} = this.props;

    this.setState({liked: false});
    axios
      .post(
        slackWebHook,
        JSON.stringify({
          attachments: [
            {
              title: markdownRemark.frontmatter.title || '',
              title_link: `https://www.thaoanvo.com${location.pathname}`,
              color: 'danger',
              text: '*Ooops!!* 1 person has just `unlike` your post.',
            },
          ],
        }),
      )
      .then(response => {
        setCookie(`liked-${location.pathname}`, 'liked', 0);
      })
      .catch(error => {
        console.log('FAILED: Send slack webhook', error);
      });
  }

  render() {
    const {
      createLink,
      date,
      enableScrollSync,
      ogDescription,
      location,
      markdownRemark,
      sectionList,
      titlePostfix = '',
    } = this.props;
    const {liked} = this.state;

    const titlePrefix = markdownRemark.frontmatter.title || '';

    const prev = getPageById(sectionList, markdownRemark.frontmatter.prev);
    const next = getPageById(sectionList, markdownRemark.frontmatter.next);

    return (
      <Flex
        direction="column"
        grow="1"
        shrink="0"
        halign="stretch"
        css={{
          width: '100%',
          flex: '1 0 auto',
          position: 'relative',
          zIndex: 0,
        }}>
        <TitleAndMetaTags
          ogDescription={ogDescription}
          ogUrl={createOgUrl(markdownRemark.fields.slug)}
          title={`${titlePrefix}${titlePostfix}`}
        />
        <div css={{flex: '1 0 auto'}}>
          <Container>
            <div css={sharedStyles.articleLayout.container}>
              <Flex type="article" direction="column" grow="1" halign="stretch">
                <MarkdownHeader title={titlePrefix} />

                {date && <div css={{marginTop: 15}}>{date} </div>}

                <div css={sharedStyles.articleLayout.content}>
                  <div
                    css={[sharedStyles.markdown]}
                    dangerouslySetInnerHTML={{__html: markdownRemark.html}}
                  />

                  {markdownRemark.fields.path && (
                    <div css={{marginTop: 80}}>
                      <span css={[helpfulMsg]}>
                        Bạn thấy bài viết này hữu ích?
                      </span>
                      <i
                        css={[likeBtn]}
                        className={`${liked ? 'fas' : 'far'} fa-thumbs-up`}
                        onClick={() => (liked ? this.unlike() : this.like())}
                      />
                    </div>
                  )}
                </div>
              </Flex>

              <div css={sharedStyles.articleLayout.sidebar}>
                <StickyResponsiveSidebar
                  enableScrollSync={enableScrollSync}
                  createLink={createLink}
                  defaultActiveSection={findSectionForPath(
                    location.pathname,
                    sectionList,
                  )}
                  location={location}
                  sectionList={sectionList}
                />
              </div>
            </div>
          </Container>
        </div>

        {(next || prev) && (
          <NavigationFooter location={location} next={next} prev={prev} />
        )}
      </Flex>
    );
  }
}

const helpfulMsg = {
  color: colors.subtle,
  borderColor: colors.divider,
  transition: 'all 0.2s ease',
  transitionPropery: 'color, border-color',
  whiteSpace: 'nowrap',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
};

const likeBtn = {
  fontSize: 30,
  marginLeft: 10,
  color: colors.brand,
  opacity: 0.7,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  transitionPropery: 'opacity',

  ':hover': {
    opacity: 1,
  },
};

export default MarkdownPage;
