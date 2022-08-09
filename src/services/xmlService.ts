import { XMLParser } from 'fast-xml-parser'
import type { Article } from '@src/models/article'

export class XmlService {
  xmlParser = new XMLParser({
    ignoreAttributes: false,
  })

  parse(xml: string): Article[] {
    const parsed = this.xmlParser.parse(xml)

    return this.rssToArticleItems(parsed.rss.channel.item)
  }

  private rssToArticleItems(data: any[]): Article[] {
    return data.map(i => this.rssToArticleItem(i))
  }

  private rssToArticleItem(data: any): Article {
    return {
      id: data.guid?.['#text'],
      author: data['dc:creator'],
      publishDate: data.pubDate,
      title: data.title,
      description: data.description,
      uri: data.link,
      thumbnail: data.enclosure?.['@_url'],
    }
  }
}
