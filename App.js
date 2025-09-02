import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <View style= {{flex:1}}> {/*부모가 flex여야 자식도 반영이 됨*/}
    {/*기본 flexDirection > column*/}
      <View style = {{flex: 1, backgroundColor: "red"}}></View>
      <View style = {{flex: 2, backgroundColor: "darkorange"}}></View>
      <View style = {{flex: 1, backgroundColor: "green"}}></View>
      <StatusBar style = "auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
