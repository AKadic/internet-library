import { StyleSheet, View } from 'react-native'
import type { ScreenProps } from './sceenProps'

export default function Screen({ children }: ScreenProps) {
  return <View style={styles.screen}>{children}</View>
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FDFDFD',
    padding: 32,
    borderRadius: 8,
    overflow: 'hidden',
  },
})
