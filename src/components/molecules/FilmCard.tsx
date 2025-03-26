import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type FilmCardProps = {
  film: {
    titulo: string;
    episodio_id: number;
    texto_apertura: string;
    director: string;
    productor: string;
    fecha_lanzamiento: string;
  };
  theme: {
    yellowStarWar: string;
    primaryTextColor: string;
    backgroundGray: string;
  };
};

const FilmCard = ({ film, theme }: FilmCardProps) => {
  const combinedStyles = {
    label: {
      ...styles.label,
      color: theme.yellowStarWar,
    },
    text: {
      color: theme.primaryTextColor,
    },
    crawlText: {
      ...styles.crawlText,
      color: theme.primaryTextColor,
    },
    crawlContainer: {
      ...styles.crawlContainer,
      backgroundColor: theme.backgroundGray,
    },
  };

  return (
    <View style={styles.card}>
      <LinearGradient
        colors={['#FFE81F', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientHeader}
      >
        <Text style={styles.title}>
          EPISODIO {film.episodio_id}: {film.titulo}
        </Text>
        <Text style={styles.subtitle}>
          Estreno: {film.fecha_lanzamiento}
        </Text>
      </LinearGradient>

      <View style={styles.cardContent}>
        <Text style={styles.text}>
          <Text style={combinedStyles.label}>Director: </Text>
          <Text style={combinedStyles.text}>
            {film.director}
          </Text>
        </Text>
        <Text style={styles.text}>
          <Text style={combinedStyles.label}>Productor: </Text>
          <Text style={combinedStyles.text}>
            {film.productor}
          </Text>
        </Text>

        <View style={combinedStyles.crawlContainer}>
          <Text style={combinedStyles.crawlText}>
            {film.texto_apertura}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FilmCard;
