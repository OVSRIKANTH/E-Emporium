import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2.5}
      style={styles.background}
      source={require("../assets/loginbackground.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-emporium.png")} />
        <Text style={styles.tagline}></Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton onPress={ ()=> navigation.navigate("Login") } >Login</AppButton>
        <AppButton style={{backgroundColor:'#4ecdc4',marginTop:10}} onPress={ ()=> navigation.navigate("Register") }>Register</AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 250,
    height: 120,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 15,
  },
});

export default WelcomeScreen;
