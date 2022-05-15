import { ScrollView, StyleSheet, View } from 'react-native'
import Screen from '@src/components/Screen'
import Feed from '@src/features/Feed'

export default function TodayScreen() {
  return (
    <ScrollView>
      <Screen>
        <Feed />
      </Screen>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
