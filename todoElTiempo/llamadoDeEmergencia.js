import React, {  useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Linking } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SMS from 'expo-sms';

const isAvailable = await SMS.isAvailableAsync();
if (isAvailable) {
  // do your SMS stuff here
} else {
  // misfortune... there's no SMS available on this device
}

try
{
    const saved = await AsyncStorage.getItem("phone");
    await SMS.sendSMSAsync(saved, " NECESITO AYUDA1!!!!!");
}catch(e){
    console.log("error")
}
function llamadoDeEmergencia() {
  const [numeroCelular,setNumeroCelular]=useState();
  const [cords, setCords] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(accelerometerData => {setCords(accelerometerData);})
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = cords;
  if(z>2||x>2||y>2){Linking.openURL('whatsapp://send?text=¡LLAMADO DE EMERGENCIA!&phone='+numeroCelular)}
}
export default llamadoDeEmergencia;