import {Text, StyleSheet} from 'react-native'

const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};
// o css do title , pra aumentar, deixar em negrito e alinhar no centro
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title;