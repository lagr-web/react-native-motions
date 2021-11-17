import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';

const ExternalData = () => {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=56.162939&lon=10.203921&exclude={current,minutely,hourly,alert}s&units=metric&appid=5cc6e0bf1f3f191db1b19ce522d3d79b')
      .then((response) => response.json())
      .then((json) => setData(json.daily))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    {
      
data.map((user, index) => (
<View key={"v" + index}>
  <Text key={"t"+ index}>{user.dt}</Text>
  <Text key={"n" + index}>{user.weather[0].icon}</Text>
  <Image source={require('../assets/ninja.png')} />
</View>

))

  }
    
    </>
  );

};

export default ExternalData;