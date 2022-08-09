import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, ScrollView, Platform } from 'react-native'
import Screen from '@src/components/Screen'
import Feed from '@src/features/Feed'

const Stack = createNativeStackNavigator()

function Nav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Today"
        options={{
          headerLargeStyle: { backgroundColor: '#FDFDFD' },
          headerLargeTitle: true,
          headerTransparent: Platform.OS === 'ios',
          headerBlurEffect: 'regular',
        }}
        component={TodayScreen}
      />
    </Stack.Navigator>
  )
}

function TodayScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Screen>
        <Feed />
      </Screen>
    </ScrollView>
  )
}

export default Nav

const styles = StyleSheet.create({
  container: {},
})
