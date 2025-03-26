/* eslint-disable react-native/no-inline-styles */
import { ActivityIndicator, FlatList,  Text, View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';
import HighlightText from '../../components/atoms/HighlightText';
import { SERVICE_API } from '../../api/urls';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../../components/molecules/SearchBar';

type People = {
    nombre: string;
    altura: number;
    masa: number;
    color_pelo: string;
    color_piel: string;
    color_ojos: string;
    año_nacimiento: string;
    genero: string;
};

const PeopleScreen = () => {
    const { theme } = useTheme();

    const[people, setPeople] = useState<People[]>([]);
    const[isLoading, setIsLoading] = useState<boolean>(true);
    const[filteredPeople, setFilteredPeople] = useState<People[]>([]);
    const[searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const fetchData = async() => {
            try {
                setIsLoading(true);
                const response = await fetch(SERVICE_API.URL_PEOPLE);
                if (!response.ok){
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const dataPeople = await response.json();
                const translatedPlanet = dataPeople.results.map(translatePlanetData);
                setPeople(translatedPlanet);
                setFilteredPeople(translatedPlanet);

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
    const translatePlanetData = (people: any): People => {
        return {
            nombre: people.name,
            altura: people.height,
            masa: people.mass,
            color_pelo: people.hair_color,
            color_piel: people.skin_color,
            color_ojos: people.eye_color,
            año_nacimiento: people.birth_year,
            genero: people.gender,
        };
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = people.filter(person =>
            person.nombre.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredPeople(filtered);
    };

    if (isLoading) {
        return (
          <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: theme.background }]}>
            <ActivityIndicator size="large" color={theme.yellowStarWar} />
          </View>
        );
    }

    return(
        <FlatList
            style={[styles.container, { backgroundColor: theme.background }]}
            contentContainerStyle={styles.scrollContainer}
            ListHeaderComponent={
                <>
                <View style={{ marginBottom: 20 }}>
                    <HighlightText
                    text1="Todos los Personajes de"
                    text2="Star Wars"
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <SearchBar
                    onSearch={handleSearch}
                    searchQuery={searchQuery}
                    />
                </View>
                </>
            }
            data={searchQuery.length > 0 ? filteredPeople : people}
            keyExtractor={(item) => item.nombre}
            renderItem={({ item }) => (
                <View style={styles.card}>
                <LinearGradient
                    colors={['#FFE81F', '#000000']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradientHeader}
                >
                    <Text style={styles.title}>
                    NOMBRE: {item.nombre}
                    </Text>
                </LinearGradient>

                <View style={styles.cardContent}>
                    <View style={combinedStyles.crawlContainer}>
                    <Text style={styles.text}>
                        <Text style={combinedStyles.label}>Altura: </Text>
                        <Text style={combinedStyles.text}>
                        {item.altura}
                        </Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={combinedStyles.label}>Masa: </Text>
                        <Text style={combinedStyles.text}>
                        {item.masa}
                        </Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={combinedStyles.label}>Color de Pelo: </Text>
                        <Text style={combinedStyles.text}>
                        {item.color_pelo}
                        </Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={combinedStyles.label}>Color de Piel: </Text>
                        <Text style={combinedStyles.text}>
                        {item.color_piel}
                        </Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={combinedStyles.label}>Color de Ojos: </Text>
                        <Text style={combinedStyles.text}>
                        {item.color_ojos}
                        </Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={combinedStyles.label}>Año de Nacimiento: </Text>
                        <Text style={combinedStyles.text}>
                        {item.año_nacimiento}
                        </Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={combinedStyles.label}>Género: </Text>
                        <Text style={combinedStyles.text}>
                        {item.genero}
                        </Text>
                    </Text>
                    </View>
                </View>
                </View>
            )}
        />
    );
};

export default PeopleScreen;
