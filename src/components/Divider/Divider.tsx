import { StyleSheet, View } from 'react-native'

export default function Divider() {
  return (
      <View style={styles.divider} />
  )
}

const styles = StyleSheet.create({
  divider: {
      borderBottomColor: '#CDCDCD',
      borderBottomWidth: 1,
      marginBottom: 8.
  },
})
