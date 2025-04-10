import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Result from './Result';
import Classification from './Classification';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [pMax, setpMax] = useState(null);//criação das variaveis para peso minimo e peso maximo
    const [pMin, setpMin] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        } 
    };

    const calcularPesoMaximo = () => {
        const pMax = 24.9 * (altura * altura);
        const pMaxCalculado = (parseFloat(pMax)).toFixed(2);
        setpMax(pMaxCalculado);
    } 
    // função para fazer o peso maximo funcionar ai criei 2 variaveis e o toFixed2 para ir até 2 numeros decimais
    const calcularPesoMinimo = () => {
        const pMin = 18.5 * (altura * altura);
        const pMinCalculado = (parseFloat(pMin)).toFixed(2);
        setpMin(pMinCalculado);
    } // função para fazer o peso minimo funcionar ai criei 2 variaveis e o toFixed2 para ir até 2 numeros decimais

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}></Text>

            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric" //teclado do tipo calculadora
                value={peso}
                onChangeText={setPeso}
            />

            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            
            <Button title="Calcular IMC" onPress={calcularIMC} color="#6200EE" /> 
            
            {imc && (
                <>
                    <Result imc={imc} />
                    <Classification imc={imc} />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        margin: 20,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#6200EE',
    },
    input: {
        height: 50,
        borderColor: '#6200EE',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: '#f5f5f5',
    },
});

export default FormIMC;
