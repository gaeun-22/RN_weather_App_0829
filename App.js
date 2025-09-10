import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  return (
    <View style= {styles.container}> {/*부모가 flex여야 자식도 반영이 됨*/}
      <View style = {styles.cityCon}>
        <Text style = {styles.city}>Ansan</Text>
      </View>
      <View style = {styles.weatherCon}>
        <View style = {styles.day}>
          <Text style = {styles.regDate}>9월 5일, 금, 22:38</Text>
          <Text style = {styles.desc}>맑음</Text>
        </View>
        <View style = {styles.tempCon}>
          <Text style = {styles.temp}>24</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff42",
  },
  cityCon: {
    flex: 1,
  },
  weatherCon: {
    flex: 3
  },
  city: {
    flex: 1,
    marginTop: 50,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  day: {
    flex: 0.2,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  regDate: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    borderRadius: 20,
  },
  desc: {
    flex: 1.5,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20
  },
  tempCon: {
    flex: 0.3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 100,
  }
});

export default App;
