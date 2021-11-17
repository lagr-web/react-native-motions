import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

//const { height, width } = Dimensions.get('window');

console.log(Dimensions.get('window'));

const Circle =({pos}) => {

    const position =300;

    return( 
    
      <View style={[styles.head, {
       left: -pos[0]*position,
       top:pos[1]*position 
       
      }]} />
      
      );

}
    
export default Circle;

const styles = StyleSheet.create({
  head: {
    position: "absolute",
    backgroundColor: "#FF5877",
    width: 50,
    height: 50,
     borderRadius: 40,

  }
});