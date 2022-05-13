import { ScrollView, StyleSheet } from 'react-native'
import Screen from '@src/components/Screen'
import Discover from '@src/features/Discover'

export default function DiscoverScreen() {
  return (
    <ScrollView>
      <Screen>
        <Discover />
      </Screen>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
