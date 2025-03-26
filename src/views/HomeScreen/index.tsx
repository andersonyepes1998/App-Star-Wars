import { Image, View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../context/ThemeContext';
import ReusableCustomButton from '../../components/molecules/ReusableCustomButton';
import HighlightText from '../../components/atoms/HighlightText';
import HighlighSecondtText from '../../components/atoms/HighlighSecondtText';

const HomeScreen = () => {

    const { theme } = useTheme();

    const combinedStyles = {
            ...styles,
            container: {
                ...styles.container,
                backgroundColor: theme.background,
            },
        };

    return(
        <View style={combinedStyles.container}>
            <Image
                source={require('../../assets/images.jpeg')}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.textStarWars}>
                <HighlightText
                    text1="Tu viaje por Star Wars"
                    text2="comienza aquí"
                />
            </View>
            <ReusableCustomButton/>
            <HighlighSecondtText
                text="Elige tu aventura en Star Wars"
            />
        </View>
    );
};

export default HomeScreen;
