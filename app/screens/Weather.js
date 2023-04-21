import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
  RefreshControl
} from 'react-native';
import WeatherInfo from './WeatherInfo';
import Emoji from 'react-native-emoji';

const API_KEY = '395655f64ad6c87bd2da20deb6929b79'

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch(error) {
      Alert.alert('Error', error.message)
    }
  }

  useEffect(() => {
    fetchWeatherData('Kyiv');
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='red'></ActivityIndicator>
      </View>
    )
  } else if (weatherData === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>City not found <Emoji name="disappointed" style={{fontSize: 20}} /></Text>
      </View>
    )
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={!loaded}
          onRefresh={() => fetchWeatherData('Kyiv')}
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>Weather today</Text>
      </View>
      {loaded && <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />}
      {weatherData === null && (
      <Text style={styles.error}>City not found <Emoji name="disappointed" style={{fontSize: 20}} /></Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#48484a',
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 29,
    fontWeight: 'bold'
  },
  error: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  }
});


export default Weather;