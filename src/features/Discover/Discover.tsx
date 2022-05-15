import { useNavigation } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { typography } from '@src/styles'
import ArticleCard from '@src/components/ArticleCard'
import Divider from '@src/components/Divider'
import type { ArticleList } from '@src/models/article'
import { TagService } from '@src/services/tagService'
import { DiscoverScreenProps } from '@src/screens/DiscoverScreen/discoverScreenProps'

export default function Discover() {
  const navigation = useNavigation<DiscoverScreenProps>()
  const tagService = useMemo(() => new TagService(), [])
  const [randomArticles, setRandomArticles] = useState<ArticleList[]>()

  useEffect(() => {
    ;(async () => {
      try {
        setRandomArticles(await tagService.getRandomArticles())
      } catch (e: any) {
        console.info(e)
      }
    })()
  }, [])

  return (
    <SafeAreaView>
      {randomArticles?.map(({ tag, articles }) => (
        <View key={tag} style={styles.tag}>
          <Text
            onPress={() => navigation.navigate('Tag', { tag })}
            style={typography.headline}
          >
            {tag}
          </Text>
          <Divider />
          {articles.map(article => (
            <View key={article.id} style={styles.article}>
              <ArticleCard article={article} />
            </View>
          ))}
        </View>
      ))}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  article: {},
  tag: {
    marginVertical: 16,
  },
})
