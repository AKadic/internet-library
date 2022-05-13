import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DiscoverScreen from '@src/screens/DiscoverScreen'
import SearchScreen from '@src/screens/SearchScreen'
import TodayScreen from '@src/screens/TodayScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  const color = (focused: boolean) => (focused ? '#007AFF' : '#8E8E8F')
  const size = 24

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator
          screenOptions={{ tabBarStyle: { marginBottom: 8, paddingTop: 8 } }}
        >
          <Tab.Screen
            name="Today"
            component={TodayScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="newspaper-outline"
                  size={size}
                  color={color(focused)}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="compass-outline"
                  size={size}
                  color={color(focused)}
                />
              ),
            }}
          />
          {/* <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons name="search" size={size} color={color(focused)} />
              ),
            }}
          /> */}
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
