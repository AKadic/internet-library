import { useEffect, useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { typography } from '@src/styles'
import ArticleCard from '@src/components/ArticleCard'
import Divider from '@src/components/Divider'
import type { RandomArticles } from '@src/models/article'
import { ArticleService } from '@src/services/articleService'

export default function Discover() {
  const articleService = useMemo(() => new ArticleService(), [])
  const [randomArticles, setRandomArticles] = useState<RandomArticles[]>()

  useEffect(() => {
    ;(async () => {
      try {
        setRandomArticles(await articleService.getRandomArticles())
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
            <View key={article.id} style={styles.article}>
              <ArticleCard article={article} />
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  article: {},
  category: {
    marginVertical: 16,
  },
})
