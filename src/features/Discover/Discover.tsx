import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { typography } from '@src/styles'
import ArticleCard from '@src/components/ArticleCard'
import Divider from '@src/components/Divider'
import type { RandomArticles } from '@src/models/article'
import { getRandomArticles } from '@src/services/articleService'

export default function Discover() {
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
          <Divider />
          {articles.map((article, index) => (
            <View style={styles.article}>
              <ArticleCard key={article.id} article={article} />
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  article: {
    paddingLeft: 8,
  },
  category: {
    marginVertical: 16,
  },
})
