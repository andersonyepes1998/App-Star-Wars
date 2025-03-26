import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    onPress: (route:string | any) => void,
    routeImage: string | any,
    text1: string,
    text2: string
}

const CustomButton = ({onPress, routeImage, text1, text2 }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <LinearGradient
                colors={['#808000', '#000000']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonBackground}
            >
                <Image source={routeImage} style={styles.icon}/>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text1}</Text>
                    <Text style={styles.text}>{text2}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 140,
        height: 140,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonBackground: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: 'linear-gradient(90deg, #808000, #000000)',
        alignItems: 'center',
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#FFD700',
    },
    icon: {
        width: 50,
        height: 50,
    },
    textContainer:{
        textAlign: 'center',
        marginTop: 5,
    },
    text: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default CustomButton;
