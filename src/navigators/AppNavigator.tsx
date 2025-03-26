import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import WelcomeScreen from '../views/WelcomeScreen';
import getHeaderOptions from './getHeaderOptions';
import FilmsScreen from '../views/FilmsScreen';
import PlanetsScreen from '../views/PlanetsScreen';
import PeopleScreen from '../views/PeopleScreen';

const AppNavigator = () => {

    const Stack = createStackNavigator();
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="WelcomeScreen"
                    screenOptions={{
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                    }}
                >
                    <>
                        <Stack.Screen
                            name="WelcomeScreen"
                            component={WelcomeScreen}
                            options={getHeaderOptions(false, false)}
                        />
                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                            options={getHeaderOptions(false, true)}
                        />
                        <Stack.Screen
                            name="FilmsScreen"
                            component={FilmsScreen}
                            options={getHeaderOptions(false, true)}
                        />
                        <Stack.Screen
                            name="PlanetsScreen"
                            component={PlanetsScreen}
                            options={getHeaderOptions(false, true)}
                        />
                        <Stack.Screen
                            name="PeopleScreen"
                            component={PeopleScreen}
                            options={getHeaderOptions(false, true)}
                        />
                    </>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});

export default AppNavigator;







