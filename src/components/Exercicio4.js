import { View, Text, StyleSheet  } from 'react-native'
import React from 'react'

const Exercicio4 = () => {
  const itens = ["Iphone", "Macbook", "Ipod", "Ipad", "Airpod"];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista Apple</Text>
      {itens.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Exercicio4