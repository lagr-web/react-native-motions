import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import {Accelerometer} from 'expo-sensors'
import Circle from "./Circle"

const MyAcce = () => {


  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

 Accelerometer.setUpdateInterval(100);

 const _subscribe = () => {
  setSubscription(
    Accelerometer.addListener(accelerometerData => {
     setData(accelerometerData);
    })
  );
};

const _unsubscribe = () => {
  subscription.remove();
  setSubscription(null);
};

useEffect(() => {
  _subscribe();
  return () => _unsubscribe();
}, []);

const { x, y, z } = data;



return (
<>
    <Text style = {styles.text}> { round(z)}</Text>
    <View><Circle pos = { [ round(x), round(y), round(z) ] }  /></View>
    </>
)

}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.round(n * 100) / 100;
}


const styles = StyleSheet.create({
  
    button: {
      alignItems: "center",
      backgroundColor: "#426A8C",
      borderRadius:8,
      marginTop:10,
      padding: 10,
      
      width:100
    },
    text:{
      color:"#000",
      fontSize:20,
      fontWeight:"bold"
    }
});


export default MyAcce;