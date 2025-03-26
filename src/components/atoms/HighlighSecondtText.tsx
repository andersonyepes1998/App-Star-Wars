import { StyleSheet, Text } from 'react-native';

type Props = {
    text: string
}

const HighlighSecondtText = ({text}:Props) => {
    return (
        <Text style={styles.subtitle}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
    },
});


export default HighlighSecondtText;
