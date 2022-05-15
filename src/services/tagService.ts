import type { Article, ArticleList } from '@src/models/article'
import { Tag, tagUrls } from '@src/models/tag'
import { FetchRssFeed } from '@src/services/rssFeed'
import { XmlService } from '@src/services/xmlService'

export class TagService {
  rss = new FetchRssFeed()
  xml = new XmlService()

  tagUrlKeys = Object.keys(tagUrls) as Tag[]
  tagUrlValues = Object.values(tagUrls)

  async get(tag: Tag): Promise<Article[]> {
    const tagFeed = await this.rss.get(tagUrls[tag])

    return this.xml.parse(tagFeed).sort(() => Math.random() - 0.5)
  }

  async getRandomArticles(): Promise<ArticleList[]> {
    const tagFeeds = await this.rss.getMultiple(this.tagUrlValues)

    return this.tagUrlKeys.map((tag, index) => ({
      tag,
      articles: this.xml.parse(tagFeeds[index]).slice(0, 5),
    }))
  }

  async getFeed(): Promise<ArticleList[]> {
    const tagFeeds = await this.rss.getMultiple(this.tagUrlValues)

    return this.tagUrlKeys.map((tag, index) => ({
      tag,
      articles: this.xml
        .parse(tagFeeds[index])
        .slice(0, 5)
        .sort(() => Math.random() - 0.5),
    }))
  }
}
