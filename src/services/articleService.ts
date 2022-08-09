import {
  spotifyFeed,
  stackOverflowFeed,
  techCrunchFeed,
  technologyReviewFeed,
  wiredFeed,
} from '@src/urls'
import type { Article, RandomArticles } from '@src/models/article'
import { FetchRssFeed } from '@src/services/rssFeed'
import { XmlService } from '@src/services/xmlService'

export class ArticleService {
  rss = new FetchRssFeed()
  xml = new XmlService()

  async getRandomArticles(): Promise<RandomArticles[]> {
    const [
      // spotifyFeedString,
      stackOverflowFeedString,
      techcrunchFeedString,
      technologyReviewFeedString,
      wiredFeedString,
    ] = await this.rss.getMany([
      // spotifyFeed,
      stackOverflowFeed,
      techCrunchFeed,
      technologyReviewFeed,
      wiredFeed,
    ])

    return [
      // {
      //   category: 'Spotify',
      //   articles: this.xml.parse(spotifyFeedString).slice(0, 5),
      // },
      {
        category: 'Stack Overflow',
        articles: this.xml.parse(stackOverflowFeedString).slice(0, 5),
      },
      {
        category: 'Tech Crunch',
        articles: this.xml.parse(techcrunchFeedString).slice(0, 5),
      },
      {
        category: 'Technology Review',
        articles: this.xml.parse(technologyReviewFeedString).slice(0, 5),
      },
      {
        category: 'Wired',
        articles: this.xml.parse(wiredFeedString).slice(0, 5),
      },
    ]
  }

  async getFeed(): Promise<Article[]> {
    const [
      // spotifyFeedString,
      stackOverflowFeedString,
      techcrunchFeedString,
      technologyReviewFeedString,
      wiredFeedString,
    ] = await this.rss.getMany([
      // spotifyFeed,
      stackOverflowFeed,
      techCrunchFeed,
      technologyReviewFeed,
      wiredFeed,
    ])

    return [
      // ...this.xml.parse(spotifyFeedString),
      ...this.xml.parse(stackOverflowFeedString),
      ...this.xml.parse(techcrunchFeedString),
      ...this.xml.parse(technologyReviewFeedString),
      ...this.xml.parse(wiredFeedString),
    ].sort(() => Math.random() - 0.5)
  }
}
