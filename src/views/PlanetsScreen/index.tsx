/* eslint-disable react-native/no-inline-styles */
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';
import HighlightText from '../../components/atoms/HighlightText';
import { SERVICE_API } from '../../api/urls';
import LinearGradient from 'react-native-linear-gradient';

type Planet = {
    nombre: string;
    clima: string;
    gravedad: string;
    terreno: string;
    agua_superficial: string;
    poblacion: number;
    periodo_rotacion: number;
    periodo_orbital: number;
    diametro: number;
};

const PlanetScreen = () => {
    const { theme } = useTheme();

    const[planet, setPlanet] = useState<Planet[]>([]);
    const[isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setIsLoading(true);
                const response = await fetch(SERVICE_API.URL_PLANETS);
                if (!response.ok){
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const dataPlanet = await response.json();
                const translatedPlanet = dataPlanet.results.map(translatePlanetData);
                setPlanet(translatedPlanet);

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();

    }, []);

    const combinedStyles = {
        container: {
            ...styles.container,
            backgroundColor: theme.background,
        },
        label : {
            ...styles.label,
            color: theme.yellowStarWar,
        },
        text: {
            color: theme.primaryTextColor,
        },
        crawlText : {
            ...styles.crawlText,
            color: theme.primaryTextColor,
        },
        crawlContainer : {
            ...styles.crawlContainer,
            backgroundColor: theme.backgroundGray,
        },
    };

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const translatePlanetData = (planet: any): Planet => {
        return {
            nombre: planet.name,
            clima: planet.climate,
            gravedad: planet.gravity,
            terreno: planet.terrain,
            agua_superficial: planet.surface_water,
            poblacion: planet.population,
            periodo_rotacion: planet.rotation_period,
            periodo_orbital: planet.orbital_period,
            diametro: planet.diameter,
        };
    };

    if (isLoading) {
        return (
          <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: theme.background }]}>
            <ActivityIndicator size="large" color={theme.yellowStarWar} />
          </View>
        );
    }

    return(
        <ScrollView
            style={[styles.container, { backgroundColor: theme.background }]}
            contentContainerStyle={styles.scrollContainer}
            >
            <View style={{ marginBottom: 20 }}>
                <HighlightText
                    text1="Todos los Planetas"
                    text2="Star Wars"
                />
            </View>
            {planet.map((item, index) => (
                <View key={index} style={styles.card}>
                    <LinearGradient
                        colors={['#FFE81F', '#000000']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.gradientHeader}
                    >
                        <Text style={styles.title}>
                            NOMBRE: {item.nombre}
                        </Text>
                        <Text style={styles.subtitle}>
                            Clima: {item.clima}
                        </Text>
                    </LinearGradient>

                    <View style={styles.cardContent}>
                        <View style={combinedStyles.crawlContainer}>
                            <Text style={styles.text}>
                                <Text style={combinedStyles.label}>Gravedad: </Text>
                                <Text style={combinedStyles.text}>
                                    {item.gravedad}
                                </Text>
                            </Text>
                            <Text style={styles.text}>
                                <Text style={combinedStyles.label}>Terreno: </Text>
                                <Text style={combinedStyles.text}>
                                    {item.terreno}
                                </Text>
                            </Text>
                            <Text style={styles.text}>
                                <Text style={combinedStyles.label}>Agua Superficial: </Text>
                                <Text style={combinedStyles.text}>
                                    {item.agua_superficial}
                                </Text>
                            </Text>
                            <Text style={styles.text}>
                                <Text style={combinedStyles.label}>Población: </Text>
                                <Text style={combinedStyles.text}>
                                    {item.poblacion}
                                </Text>
                            </Text>
                            <Text style={styles.text}>
                                <Text style={combinedStyles.label}>Periodo Rotación: </Text>
                                <Text style={combinedStyles.text}>
                                    {item.periodo_rotacion}
                                </Text>
                            </Text>
                            <Text style={styles.text}>
                                <Text style={combinedStyles.label}>Periodo Orbital: </Text>
                                <Text style={combinedStyles.text}>
                                    {item.periodo_orbital}
                                </Text>
                            </Text>
                            <Text style={styles.text}>
                                <Text style={combinedStyles.label}>Diámetro: </Text>
                                <Text style={combinedStyles.text}>
                                    {item.diametro}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default PlanetScreen;
