import { useEffect, useMemo, useState } from 'react'
import { StyleSheet } from 'react-native'
import ArticleCard from '@src/components/ArticleCard'
import { Article } from '@src/models/article'
import { TagService } from '@src/services/tagService'

export default function Feed() {
  const tagService = useMemo(() => new TagService(), [])
  const [feed, setFeed] = useState<Article[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        setFeed((await tagService.getFeed()).flatMap(list => list.articles))
      } catch (e: any) {
        console.info(e)
      }
    })()
  }, [])

  return (
    <>
      {feed.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  )
}

const styles = StyleSheet.create({})
