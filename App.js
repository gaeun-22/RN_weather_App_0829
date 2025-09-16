import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import * as Location from 'expo-location';

const windowWidth = Dimensions.get('window').width;

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState(null);

  const [permitted, setPermitted] = useState(true);

  const locationData = async() => {
    const {granted} =  await Location.requestForegroundPermissionsAsync();
    //console.log(granted);

    if(!granted){
      setPermitted(false);
      setErrorMsg('위치에 대한 권한 부여가 거부되었습니다.');

      return;
    }

    const {
      coords: {latitude, longitude},
    } = await Location.getCurrentPositionAsync({ accuracy : 5});
    //console.log(latitude, longitude);

    const address = await Location.reverseGeocodeAsync(
      {latitude, longitude},
      {useGoogelMaps: false}
    );
    //console.log(address);

    const cityAddress = address[0].city
    setCity(cityAddress);
  };


  useEffect(() => {
    locationData();
  }, []);
  
//허가여부 - 위치 정보 받아오는 영상에서 사용하였음.
//const [permitted, setPermitted] = useState(true);

  return (
    <View style= {styles.container}> {/*부모가 flex여야 자식도 반영이 됨*/}
      <View style = {styles.cityCon}>
        <Text style = {styles.city}>{city}</Text>
      </View>
      <View style = {styles.regDateCon}>
        <Text style = {styles.regDate}>9월 5일, 금, 22:38</Text>
      </View>
      <ScrollView horizontal pagingEnabled 
      showsHorizontalScrollIndicator = {false}
      style = {styles.weather}>
        <View style = {styles.weatherCon}>
          <View style = {styles.day}>
            <Text style = {styles.desc}>맑음</Text>
          </View>
          <View style = {styles.tempCon}>
            <Text style = {styles.temp}>24</Text>
          </View>
        </View>
        <View style = {styles.weatherCon}>
          <View style = {styles.day}>
            <Text style = {styles.desc}>맑음</Text>
          </View>
          <View style = {styles.tempCon}>
            <Text style = {styles.temp}>24</Text>
          </View>
        </View>
        <View style = {styles.weatherCon}>
          <View style = {styles.day}>
            <Text style = {styles.desc}>맑음</Text>
          </View>
          <View style = {styles.tempCon}>
            <Text style = {styles.temp}>24</Text>
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff42",
  },
  cityCon: {
    flex: 0.3,
  },
   regDateCon:{
    alignItems: "center",
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
    overflow: "hidden"
  },
  weather: {
  },
  weatherCon: {
    width: windowWidth,
  },
  city: {
    flex: 1,
    marginTop: 80,
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
