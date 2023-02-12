import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
      style={{height:50}}
      placeholder='Enter the sentence'
      onChangeText={newText => setText(newText)}
      defaultValue={text}
       />
      <Text>
        {text
            .split(" ")
            .map(t => t && "🍕")
            .join(" ")
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
