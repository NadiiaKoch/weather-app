import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import WeatherSearch from './search';

function WeatherInfo({weatherData, fetchWeatherData}) {
  const {
    name,
    visibility,
    weather: [{ icon, description}],
    main: {temp, humidity, feels_like, },
    wind: {speed},
    sys: {sunrise, sunset},
  } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <WeatherSearch fetchWeatherData={fetchWeatherData} />
      <View style={{ alignItems: 'center'}}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image 
          style={styles.largeIcon}
          source={{uri: `http://openweathermap.org/img/wn/${icon}.png`}}
        />
        <Text style={styles.currentTemp}>{Math.round(temp)} °C</Text>
      </View>
      <Text style={styles.description}>{description.charAt(0).toUpperCase() + description.slice(1)}</Text>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image 
            style={styles.smallIcon}
            source={require('../assets/temp.png')}
          />
          <Text style={styles.infoText}>{Math.round(feels_like)} °C</Text>
          <Text style={styles.infoText}>Feels like</Text>
        </View>
        <View style={styles.info}>
          <Image 
            style={styles.smallIcon}
            source={require('../assets/humidity.png')}
          />
          <Text style={styles.infoText}>{humidity} %</Text>
          <Text style={styles.infoText}>Humidity</Text>
        </View>

      </View>

      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image 
            style={styles.smallIcon}
            source={require('../assets/visibility.png')}
          />
          <Text style={styles.infoText}>{visibility}</Text>
          <Text style={styles.infoText}>Visibility</Text>
        </View>
        <View style={styles.info}>
          <Image 
            style={styles.smallIcon}
            source={require('../assets/wind.png')}
          />
          <Text style={styles.infoText}>{speed} m/s</Text>
          <Text style={styles.infoText}>Wind speed</Text>
        </View>

      </View>

      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image 
            style={styles.smallIcon}
            source={require('../assets/sunrise.png')}
          />
          <Text style={styles.infoText}>{new Date(sunrise*1000).toLocaleTimeString()}</Text>
          <Text style={styles.infoText}>Sunrise</Text>
        </View>
        <View style={styles.info}>
          <Image 
            style={styles.smallIcon}
            source={require('../assets/sunset.png')}
          />
          <Text style={styles.infoText}>{new Date(sunset*1000).toLocaleTimeString()}</Text>
          <Text style={styles.infoText}>Sunset</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'ea6e4a',
    marginTop: 10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  largeIcon: {
    width: 100,
    height: 100, 
  },
  currentTemp: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 7,
  },
  info: {
    width: Dimensions.get('screen').width/2.5,
    backgroundColor: '#e96e50',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center'
  },
  smallIcon: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
    marginLeft: 50,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default WeatherInfo;