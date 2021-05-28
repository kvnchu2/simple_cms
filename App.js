import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import icon from "./assets/icon.png";


export default function App() {
  return(
    <View style={ styles.page}>
      <Image style={styles.image} source={icon}/>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    flex: 1,
    borderRadius: 50,
    margin: 10,
    width: Dimensions.get("window").width - 10
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow"
  }
})