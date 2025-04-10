import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

const Classification = ({ imc }) => {
        

        if(imc < 18.5){
            <Text>Abaixo do peso</Text>
        } if(imc >=18.5 && imc <= 24.9){
            <Text>Peso normal</Text>
        } if(imc >= 25 && imc <=29.9){
            <Text>Sobrepeso</Text>
        } if(imc >= 30 && imc <= 34.9){
            <Text>Obesidade grau I</Text>
        } if(imc >=35 && imc < 39.9){
            <Text>Obesidade grau II</Text>
        }

        return(
            <View>
                <Text>{imc}</Text>
            </View>

        )
    }
export default Classification;

    