/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @providesModule site-constants
 * @flow
 */

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
const urlRoot = 'https://iaman.cf';
const babelURL = 'https://unpkg.com/babel-standalone@6.26.0/babel.min.js';
const slackWebHook = 'https://hooks.slack.com/services/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'

export {urlRoot, babelURL, slackWebHook};
