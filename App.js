import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 결과 : {number} </Text>
      {/*전개구문*/}
      <Text style={{...styles.text, color: "blue"}}> 리액트 네이티브</Text> 
      <View style={{ flexDirection: "row", gap: 10}}>
        <Button title="증가" onPress={() => setNumber(number +1)}/>
        <Button title="감소" onPress={() => setNumber(number -1)}/>
      </View>
      <StatusBar style="auto" />
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
  text: { //부모속성 상속x
    fontSize: 50,
    fontWeight: "bold",
  }
});
