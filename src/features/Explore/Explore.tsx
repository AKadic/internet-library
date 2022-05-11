import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { RandomArticles } from '@src/models/article'
import { getRandomArticles } from '@src/services/articleService'
import { typography } from '@src/styles'
import ArticleCard from '@src/components/ArticleCard'

export default function Explore() {
  const [randomArticles, setRandomArticles] = useState<RandomArticles[]>()

  useEffect(() => {
    ;(async () => {
      try {
        setRandomArticles(await getRandomArticles())
      } catch (e: any) {
        console.info(e)
      }
    })()
  }, [])

  return (
    <View>
      {randomArticles?.map(({ category, articles }) => (
        <View key={category} style={styles.category}>
          <Text style={typography.headline}>{category}</Text>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  category: {
    marginVertical: 16,
  }
})
