import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Audio } from "expo-av";

import Button from "./Button";

export default function App() {
  const soundObject = new Audio.Sound();

  const playSound = async () => {
    const sound = await soundObject.getStatusAsync();

    if (sound && sound.isLoaded && sound.isPlaying) {
      soundObject.stopAsync();
      return;
    }

    if (sound && !sound.isLoaded) {
      await soundObject.loadAsync(require("./assets/octoalert.mp3"));
    }

    await soundObject.playAsync();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.background}
      >
        <Button onPress={playSound} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
});
