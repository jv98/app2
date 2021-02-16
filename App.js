import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './bilder/bärg.jpg';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
    let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>

      <Text  style={styles.instructions}> för att dela ett foto från din telffone med en vän klicka på knappen under </Text>
      <TouchableOpacity onPress={(openImagePickerAsync) => alert('Hello, world!')} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 250,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 25,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
