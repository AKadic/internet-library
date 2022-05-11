import { useEffect, useState } from 'react'
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import { typography } from '@src/styles'
import Card from '@src/components/Card'
import { getFeed } from './api'
import type { ArticleItem } from './models'

export default function Feed() {
  const [feed, setFeed] = useState<ArticleItem[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        setFeed(await getFeed())
      } catch (e: any) {
        console.info(e)
      }
    })()
  }, [])

  const onPress = async (item: ArticleItem) => {
    const supported = await Linking.canOpenURL(item.uri)

    if (supported) {
      Linking.openURL(item.uri)
    } else {
      console.log("Don't know how to open URI: " + item.uri)
    }
  }

  return (
    <>
      {feed.map(item => (
        <View key={item.id} style={styles.container}>
          <Card>
            <Pressable onPress={() => onPress(item)}>
              {item.thumbnail && (
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.thumbnail }}
                  resizeMode="cover"
                />
              )}
              <View style={styles.inner}>
                <Text style={{ ...styles.cardTitle, ...typography.subtitle }}>
                  {item.title}
                </Text>
                <Text style={typography.label}>{item.author}</Text>
              </View>
            </Pressable>
          </Card>
        </View>
      ))}
    </>
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
