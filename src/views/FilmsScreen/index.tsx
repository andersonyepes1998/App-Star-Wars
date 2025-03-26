/* eslint-disable react-native/no-inline-styles */
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';
import HighlightText from '../../components/atoms/HighlightText';
import { SERVICE_API } from '../../api/urls';
import FilmCard from '../../components/molecules/FilmCard';

type Film = {
    titulo: string;
    episodio_id: number;
    texto_apertura: string;
    director: string;
    productor: string;
    fecha_lanzamiento: string;
};

const FilmsScreen = () => {
    const { theme } = useTheme();

    const[films, setFilms] = useState<Film[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setIsLoading(true);
                const response = await fetch(SERVICE_API.URL_FILMS);
                if (!response.ok){
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const dataFilms = await response.json();
                const translatedFilms = dataFilms.results.map(translateFilmData);
                setFilms(translatedFilms);

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();

    }, []);

    const translateFilmData = (film: any): Film => {
        return {
            titulo: film.title,
            episodio_id: film.episode_id,
            texto_apertura: film.opening_crawl,
            director: film.director,
            productor: film.producer,
            fecha_lanzamiento: film.release_date,
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
                    text1="Todas las películas"
                    text2="Star Wars"
                />
            </View>
            {films.map((film, index) => (
                <FilmCard
                    key={index}
                    film={film}
                    theme={theme}
                />
            ))}
        </ScrollView>
    );
};

export default FilmsScreen;
