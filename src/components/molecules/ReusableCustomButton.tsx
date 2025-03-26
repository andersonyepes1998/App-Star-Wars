import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../atoms/CustomButton';

const ReusableCustomButton = () => {

    const navigation = useNavigation();

    const handleNavigation = (route:string) => {
        (navigation.navigate as any)(route);
    };

    return (
        <>
            <View style={styles.container}>
                <CustomButton
                    routeImage={require('../../assets/Films.png')}
                    text1="Mostar"
                    text2="Peliculas"
                    onPress={() => handleNavigation('FilmsScreen')}
                />
                <CustomButton
                    routeImage={require('../../assets/Planets.png')}
                    text1="Mostar"
                    text2="Planetas"
                    onPress={() => handleNavigation('PlanetsScreen')}
                />
            </View>
            <View style={styles.container}>
                <CustomButton
                    routeImage={require('../../assets/People.png')}
                    text1="Mostar"
                    text2="Personajes"
                    onPress={() => handleNavigation('PeopleScreen')}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ReusableCustomButton;
