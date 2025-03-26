import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

type Props= {
    text1: string,
    text2: string,
}

const HighlightText = ({text1, text2}:Props) => {

    const { theme } = useTheme();

    const combinedStyles = {
            ...styles,
            title: {
                ...styles.title,
                color: theme.primaryTextColor,
            },
        };

    return(
        <Text style={combinedStyles.title}>
            {text1} <Text style={styles.highlight}>{text2}</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    highlight: {
        color: '#D4E157',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HighlightText;
