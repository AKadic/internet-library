export interface Article {
  id: string
  author: string
  publishDate: string
  title: string
  description: string
  uri: string
  thumbnail?: string
}

export interface RandomArticles {
  category: string
  articles: Article[]
}
