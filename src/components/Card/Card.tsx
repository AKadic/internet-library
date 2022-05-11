import { StyleSheet, View } from 'react-native'
import type { CardProps } from './cardProps'

export default function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
  },
})
