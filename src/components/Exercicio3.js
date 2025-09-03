import { View, Text, StyleSheet, TextInput  } from 'react-native'
import React, { useState } from 'react'

const Exercicio3 = () => {
  const [texto, setTexto] = useState('');

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f59e',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#000dffff',
    borderRadius: 8,
    padding: 15,
    fontSize: 35,
    backgroundColor: '#ff8400ff',
    marginBottom: 20,
  },
  displayLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  displayText: {
    fontSize: 16,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    minHeight: 50,
    color: texto ? '#333' : '#999',
  },
})

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="aprendendo spring"
        value={texto}
        onChangeText={setTexto}
      />
      <Text>{texto}</Text>
    </View>
  )
}

export default Exercicio3