import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ExploreScreen from '@src/screens/ExploreScreen'
import HomeScreen from '@src/screens/HomeScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
