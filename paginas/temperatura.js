// const response = await axios.get(`${url}?lat=${data.coords.latitude}&lon=${data.coords.longitude}&appid=${API_KEY}&units=metric`)
import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, StyleSheet } from 'react-native';
const axios = require('axios')
import * as Location from "expo-location"

const API_KEY="3301fd17bfef8d6f8cdcf92da11f6f2b";
const url="https://api.openweathermap.org/data/2.5/onecall";

const temperatura = () => {
    let minutos = new Date.getMinutes();
    let hora = new Date.getHours();
    let semana = new Date.getDay();
    let dia = new Date.getDate();
    let mes = new Date.getMonth() + 1;
    let año = new Date.getFullYear();
    const [weather, setWeather] = useState();


    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }
          
        const data = await Location.getCurrentPositionAsync({});
        const response = await axios.get(`${url}?lat=${data.coords.latitude}&lon=${data.coords.longitude}&appid=${API_KEY}&units=metric`)
        setWeather(response.data);
        })();
    }, []);

    //<Text> Ubicación: {weather.lat}{weather.lon} </Text>
    //<Text> Temperatura: {weather.current.temp} </Text>

    return (
        <SafeAreaView >
        <Text> Año:{año} </Text>
        <Text> Mes:{mes} </Text>
        <Text> Semana:{semana} </Text>
        <Text> Dia:{dia} </Text>
        <Text> Hora:{hora} </Text>
        <Text> Minutos:{minutos} </Text>
       
        </SafeAreaView>
    );

}
export default temperatura;