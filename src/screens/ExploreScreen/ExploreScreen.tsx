import { ScrollView, StyleSheet } from 'react-native'
import Screen from '@src/components/Screen'
import Explore from '@src/features/Explore'

export default function ExploreScreen() {
  return (
    <ScrollView>
      <Screen>
        <Explore />
      </Screen>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
