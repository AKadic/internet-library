import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import { typography } from '@src/styles'
import Card from '@src/components/Card'
import type { Article } from "@src/models/article"
import type { ArticleCardProps } from './articleCardProps'

export default function ArticleCard({ article }: ArticleCardProps) {
  const onPress = async (item: Article) => {
    const supported = await Linking.canOpenURL(item.uri)

    if (supported) {
      Linking.openURL(item.uri)
    } else {
      console.log("Don't know how to open URI: " + item.uri)
    }
  }

  return (
    <View style={styles.container}>
      <Card>
        <Pressable onPress={() => onPress(article)}>
          {article.thumbnail && (
            <Image
              style={styles.cardImage}
              source={{ uri: article.thumbnail }}
              resizeMode="cover"
            />
          )}
          <View style={styles.inner}>
            <Text style={{ ...styles.cardTitle, ...typography.subtitle }}>
              {article.title}
            </Text>
            <Text style={typography.label}>{article.author}</Text>
          </View>
        </Pressable>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  cardImage: {
    height: 125,
  },
  inner: {
    padding: 16,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    marginVertical: 8,
  },
})