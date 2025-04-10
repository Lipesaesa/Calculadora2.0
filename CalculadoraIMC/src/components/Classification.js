import { Text, View } from "react-native";
import {imc} from './FormIMC';

const Classification = ({ imc }) => {
    let content;
    //logica de programação basica de condição if e else if
    if (imc < 18.5) {
        content = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        content = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        content = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        content = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        content = 'Obesidade grau II';
    } 

    

    //retornando a variavel para o site para aparecer como está o peso do usuario
    return (
        <View>
            <Text>{content}</Text>
        </View>
    );
};

export default Classification;
