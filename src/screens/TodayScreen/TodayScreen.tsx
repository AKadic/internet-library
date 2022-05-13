import { StyleSheet, ScrollView } from 'react-native'
import Screen from '@src/components/Screen'
import Feed from '@src/features/Feed'

export default function TodayScreen() {
  return (
    <ScrollView style={styles.container}>
      <Screen>
        <Feed />
      </Screen>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
})
