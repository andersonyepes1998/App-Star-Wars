import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import HighlightText from '../../components/atoms/HighlightText';
import HighlighSecondtText from '../../components/atoms/HighlighSecondtText';
const WelcomeScreen = () => {

    const { theme } = useTheme();
    const navigation = useNavigation();

    const handleNavigation = (route:string) => {
        (navigation.navigate as any)(route);
    };

    const combinedStyles = {
        ...styles,
        container: {
            ...styles.container,
            backgroundColor: theme.background,
        },
    };

    return(
        <View style={combinedStyles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/Star_Wars.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <HighlightText
                text1="Únete a la"
                text2="fuerza"
            />
            <HighlighSecondtText
                text="Explora las galaxia, personajes y peliculas"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={()=> handleNavigation('HomeScreen')}
            >
                <LinearGradient
                    colors={['#808000', '#000000']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonBackground}
                >
                    <Text style={styles.buttonText}>Empecemos</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;
