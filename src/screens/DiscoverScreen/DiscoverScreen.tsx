import { createStackNavigator } from '@react-navigation/stack'
import { useCallback } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Screen from '@src/components/Screen'
import Discover from '@src/features/Discover'
import TagFeedScreen from '@src/screens/TagFeedScreen'
import type { DiscoverScreenProps } from './discoverScreenProps'

const Stack = createStackNavigator()

export default function DiscoverScreen({}: DiscoverScreenProps) {
  const HomeScreen = useCallback(
    () => (
      <ScrollView>
        <Screen>
          <Discover />
        </Screen>
      </ScrollView>
    ),
    [],
  )

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen name="Tag" component={TagFeedScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
