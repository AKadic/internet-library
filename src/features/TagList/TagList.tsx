import { StyleSheet, Text } from 'react-native'
import { typography } from '@src/styles'
import type { TagListProps } from './tagListProps'

export default function TagList({ tag }: TagListProps) {
  return (
    <Text style={typography.headline}>{tag}</Text>
  )
}

const styles = StyleSheet.create({
})
