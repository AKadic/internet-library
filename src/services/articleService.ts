import { XMLParser } from 'fast-xml-parser'
import { spotifyFeed, stackOverflowFeed } from '@src/urls'
import type { Article, RandomArticles } from '@src/models/article'

export async function getRandomArticles(): Promise<RandomArticles[]> {
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

  return [
    {
      category: 'Spotify',
      articles: parse(spotifyFeedString).slice(0, 5),
    },
    {
      category: 'Stack Overflow',
      articles: parse(stackOverFlowFeedString).slice(0, 5),
    },
  ]
}

export async function getFeed(): Promise<Article[]> {
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

  return [...parse(spotifyFeedString), ...parse(stackOverFlowFeedString)].sort(() => Math.random() - 0.5)
}

function parse(xml: string): Article[] {
  const xmlParser = new XMLParser({
    ignoreAttributes: false,
  })
  const parsed = xmlParser.parse(xml)

  return rssToArticleItems(parsed.rss.channel.item)
}

function rssToArticleItems(data: any[]): Article[] {
  return data.map(i => rssToArticleItem(i))
}

function rssToArticleItem(data: any): Article {
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
