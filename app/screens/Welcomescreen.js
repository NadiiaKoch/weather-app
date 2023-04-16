import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

function WelcomeScreen() {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate('Weather');
  };

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Weather App</Text>
      <Image 
        style={styles.icon}
        source={require('../assets/weather.png')}
      />
      <Text style={styles.paragraph}>It's the newest weather app.</Text>
      <TouchableOpacity style={styles.welcomeButton} onPress={handleGetStartedPress}>
        <Text style={styles.welcomeButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  paragraph: {
    color: '#F8F7FB',
    marginBottom: 30
  },
  title: {
    color: 'black',
    fontSize: 60,
    marginBottom: 60,
  },
  welcomeButton: {
    width: '60%',
    height: 60,
    backgroundColor: '#e96e50',
    borderRadius: '15',
    marginBottom: '20%' ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeButtonText: {
    color: '#fff',
    fontSize: 20
  },
  icon: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
})

export default WelcomeScreen;