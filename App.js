import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function App() {
  return(
    <View style={ styles.page}>
      <Text style={styles.text}>red</Text>
      <Text style={[styles.text, styles.selectedText]}>blue</Text>
      <Text style={styles.text}>greens</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#DDD"
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow"
  }
})