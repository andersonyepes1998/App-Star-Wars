import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
        marginTop: -90,
        borderWidth: 2,
        borderColor: '#FFD700',
    },
    image: {
        width: 150,
        height: 150,
    },
    subtitle: {
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
    },
    button: {
      borderRadius: 25,
      overflow: 'hidden',
      marginTop: 80,
      borderWidth: 2,
      borderColor: '#FFD700',
    },
    buttonBackground: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        backgroundColor: 'linear-gradient(90deg, #808000, #000000)',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
