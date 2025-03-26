import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        padding: 16,
    },
    card: {
        borderRadius: 12,
        marginBottom: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#FFD700',
    },
    gradientHeader: {
        padding: 16,
    },
    cardContent: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#fff',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
    },
    crawlContainer: {
        marginTop: 12,
        padding: 12,
        borderRadius: 8,
    },
    crawlText: {
        fontStyle: 'italic',
        lineHeight: 20,
        textAlign: 'center',
    },
});
