import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import ArticleCard from '@src/components/ArticleCard'
import { Article } from '@src/models/article'
import { getFeed } from '@src/services/articleService'

export default function Feed() {
  const [feed, setFeed] = useState<Article[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        setFeed(await getFeed())
      } catch (e: any) {
        console.info(e)
      }
    })()
  }, [])

  return (
    <>
      {feed.map(article => <ArticleCard key={article.id} article={article} />)}
    </>
  )
}

const styles = StyleSheet.create({
})
