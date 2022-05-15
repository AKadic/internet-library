import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { typography } from '@src/styles'
import Divider from '@src/components/Divider'
import Screen from '@src/components/Screen'

export default function SearchScreen() {
  const [value, setValue] = useState<string>()

  return (
    <Screen>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Search"
      />
      <Text style={typography.subtitle}>Suggested</Text>
      <Divider />
    </Screen>
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 6,
    backgroundColor: '#EDEDED',
    padding: 8,
    marginBottom: 36,
  },
})
