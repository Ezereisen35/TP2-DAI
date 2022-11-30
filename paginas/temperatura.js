import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, StyleSheet } from 'react-native';
import axios from "axios";
import * as Location from "expo-location"

const API_KEY="3301fd17bfef8d6f8cdcf92da11f6f2b";
const url="https://api.openweathermap.org/data/2.5/weather";

const Temperatura = () => {
    const [weather, setWeather] = useState();


    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }
          
        const data = await Location.getCurrentPositionAsync({});
        const response = await axios.get(`${url}?lat=${data.coords.latitude}&lon=${data.coords.longitude}&appid=${API_KEY}`)
        
        setWeather(response.data);
        console.log("TIEMPO!!!!!!!!!!!!", weather.main)}
        )();}, []);

    //<Text> Ubicación: {weather.lat}{weather.lon} </Text>
    //<Text> Temperatura: {weather.current.temp} </Text>

    return (
        <SafeAreaView >
        
        <Text>Latitud: {weather?.coord.lat}</Text>
      <Text>Longitud: {weather?.coord.lon}</Text>
        <Text>Temperatura: {weather?.main.temp}</Text>
        <Text>Fecha: {new Date().toLocaleString()}</Text>
        </SafeAreaView>
    );

}
export default Temperatura;