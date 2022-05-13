import { StyleSheet, View } from 'react-native'
import type { ScreenProps } from './sceenProps'

export default function Screen({ children }: ScreenProps) {
  return <View style={styles.screen}>{children}</View>
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
})
