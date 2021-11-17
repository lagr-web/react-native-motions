import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import MyAcce from "./components/MyAcce"
import ExternalData from "./components/ExternalData"


export default function App() {


const showDeviceInfo = () => {

  Alert.alert(
    Device.osName,
    Device.osVersion
    )

}


  return (
    <View style={styles.container}>
      
      <View style={styles.deviceInfo}>
      <Text>Acces the Device info</Text>
     <TouchableOpacity onPress = {showDeviceInfo} style = {styles.button}>
         <Text style = {styles.text}>Alert</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      </View>

      <View style={styles.accelerometer} ><MyAcce /></View>
  
      <View style={styles.exdata}><ExternalData /></View>
      
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
  },

  deviceInfo:{
    flex:0.5,
    backgroundColor:"red",
    alignItems: 'center',
    justifyContent: 'center',
  },

  accelerometer:{
    flex:0.5,
    backgroundColor:"blue",
    alignItems: 'center',
    justifyContent: 'center',
  },

  exdata:{
    flex:0.5,
    backgroundColor:"green",
    alignItems: 'center',
    justifyContent: 'center',
  },

    button: {
      alignItems: "center",
      backgroundColor: "#426A8C",
      borderRadius:8,
      marginTop:10,
      padding: 10,
      width:100
    },

    text:{
      color:"#fff",
      fontSize:20,
      fontWeight:"bold"
    }

});
