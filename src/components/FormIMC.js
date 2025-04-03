import {View, Textinput, Button, StyleSheet} from 'react-native';
import Result from './Result';

const FormIMC  = () => {
    const [peso, setPeso] = ueState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        if (peso && altura){
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };

    return (
        <View style={StyleSheet.formContainer}>
            <TextInput 
                style={style.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />

            <TextInput
                style={StyleSheet.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />

            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,

    },

    input: {
        heigth: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;