import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import WeatherInfo from './WeatherInfo';

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
        <Text>City not found</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather today</Text>
      </View>
      <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
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
});


export default Weather;