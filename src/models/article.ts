import { Tag } from "./tag"

export interface Article {
  id: string
  author: string
  publishDate: string
  title: string
  description: string
  uri: string
  thumbnail?: string
}

export interface ArticleList {
  tag: Tag
  articles: Article[]
}
