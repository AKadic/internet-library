import { ScrollView, StyleSheet } from 'react-native'
import Screen from '@src/components/Screen'
import TagList from '@src/features/TagList'
import type { TagFeedScreenProps } from './tagFeedScreenProps'

export default function TagFeedScreen({ tag }: TagFeedScreenProps) {
  return (
    <ScrollView>
      <Screen>
        <TagList tag={tag} />
      </Screen>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
