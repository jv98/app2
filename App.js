import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './bilder/bärg.jpg';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
    let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  }
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.Bild}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>

      <Text  style={styles.info}> för att se en bild klicka på knappen under </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.Knap}>
        <Text style={styles.KnapText}>Välje en bild</Text>
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
    width: 310,
    height: 250,
    marginBottom: 10,
  },
  info: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 25,
  },
  Knap: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  KnapText: {
    fontSize: 20,
    color: '#fff',
    
  }, 
  Bild: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
