import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Result = ({ imc }) => {
    return(
        <Text style={styles.result}> Seu IMC é: {imc}</Text> //chamando o css result para a estilização da frase
    );
};

const styles = StyleSheet.create({
    return: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

    

export default Result;