/* eslint-disable react-native/no-inline-styles */
import { Image, SafeAreaView, View, TouchableOpacity, Platform } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { styles } from './style';

type Props = {
    transparentBackground: boolean
    iconStart: boolean
}

const Header = ({transparentBackground, iconStart}: Props) => {
    const { isLightTheme, theme, toggleTheme } = useTheme();

    const combinedStyles = {
        ...styles,
        container: {
            ...styles.container,
            backgroundColor: transparentBackground ? 'transparent' : theme.background,
        },
    };

    return (
        <SafeAreaView style={combinedStyles.container}>
            <View
                style={[
                    styles.header,
                    Platform.OS === 'web'
                        ? { width: '30%', minWidth: 415, alignSelf: 'center' }
                        : null,
                ]}
            >
                {iconStart && (
                    <Image
                        source={require('../../../assets/Star_Wars.png')}
                        style={{ width: 85, height: 45 }}
                    />
                )}
                <TouchableOpacity
                onPress={() => {
                    toggleTheme();
                }}
                style={styles.buttonTheme}
                >
                    {isLightTheme ? (
                        <Image
                            source={require('../../../assets/iconMoon.png')}
                            style={{ width: 45, height: 45 }}
                        />
                    ) : (
                        <Image
                            source={require('../../../assets/iconSun.png')}
                            style={{ width: 45, height: 45 }}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Header;
