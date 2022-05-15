import {
  spotifyFeedUrl,
  stackOverflowFeedUrl,
  techCrunchFeedUrl,
  technologyReviewFeedUrl,
  wiredFeedUrl,
} from '@src/urls'

export const tagUrls = {
  Spotify: spotifyFeedUrl,
  'Stack Overflow': stackOverflowFeedUrl,
  'Tech Crunch': techCrunchFeedUrl,
  'Technology Review': technologyReviewFeedUrl,
  Wired: wiredFeedUrl,
}

export type Tag = keyof typeof tagUrls