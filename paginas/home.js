import React, {useEffect, useState} from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home() {
    const navigation = useNavigation();


    return (
        <View >
            <View style={{marginVertical: 10}}>
                <Button title="Contactos" onPress={() => navigation.navigate('Contactos')}/>
            </View>
            <View style={{marginVertical: 10}}>
                <Button title="About Us" onPress={() => navigation.navigate("About")}/>
            </View>
            <View style={{marginVertical: 10}}>
                <Button title="Contacto de emergencia" onPress={() => navigation.navigate("Emergency")}/>
            </View>{/*
            <View style={{marginVertical: 10}}>
                <Button title="Temperatura" onPress={() => navigation.navigate("Temperatura")}/>
    </View>*/}
        </View>   
    );        

}



const styles = StyleSheet.create({



});

export default Home;