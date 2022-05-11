import { XMLParser } from 'fast-xml-parser'
import { spotifyFeed, stackOverflowFeed } from './urls'
import type { ArticleItem } from './models'

export async function getFeed(): Promise<ArticleItem[]> {
  const responses = await Promise.all([
    fetch(spotifyFeed),
    fetch(stackOverflowFeed),
  ])

  if (responses.some(i => !i.ok)) {
    const failedResponse = responses.find(i => !i.ok)!

    throw Error(await failedResponse.text())
  }

  const [spotifyResponse, stackOverFlowResponse] = responses

  const [spotifyFeedString, stackOverFlowFeedString] = await Promise.all([
    spotifyResponse.text(),
    stackOverFlowResponse.text(),
  ])

  return [...parse(spotifyFeedString), ...parse(stackOverFlowFeedString)]
}

function parse(xml: string): ArticleItem[] {
  const xmlParser = new XMLParser({
    ignoreAttributes: false,
  })
  const parsed = xmlParser.parse(xml)

  return rssToArticleItems(parsed.rss.channel.item)
}

function rssToArticleItems(data: any[]): ArticleItem[] {
  return data.map(i => rssToArticleItem(i))
}

function rssToArticleItem(data: any): ArticleItem {
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
